import { useEffect, useRef, useState, useMemo } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion } from "motion/react";
import { FRAME_COUNT, getFrameUrl } from "../lib/constants";

import Overlay from "./Overlay";

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let count = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      img.onload = () => {
        count++;
        if (count === FRAME_COUNT) {
          setIsLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = images[Math.floor(index)];

    if (!canvas || !ctx || !img) return;

    // Object-fit: cover logic
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    
    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetX = 0;
      offsetY = -(drawHeight - canvas.height) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      drawHeight = canvas.height;
      offsetX = -(drawWidth - canvas.width) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Redraw when frameIndex changes
  const [currentFrame, setCurrentFrame] = useState(0);
  useMotionValueEvent(frameIndex, "change", (latest) => {
    const idx = Math.floor(latest);
    setCurrentFrame(idx);
    drawFrame(idx);
  });

  // Initial draw and resize handling
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(frameIndex.get());
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded, images]);

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-brand-bg">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-50">
            <div className="text-white/30 font-mono text-sm tracking-widest animate-pulse">
              LOADING SEQUENCE...
            </div>
          </div>
        )}
        <canvas 
          ref={canvasRef}
          className="w-full h-full object-cover"
          style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.8s ease-in-out' }}
        />
        
        {/* HUD Elements */}
        <div className="absolute right-10 bottom-10 z-40 text-right mix-blend-difference hidden md:block">
          <div className="mb-6">
            <p className="text-[10px] text-white/40 font-mono mb-1 uppercase tracking-[0.3em]">Frame sequence</p>
            <p className="text-3xl font-light font-mono tabular-nums">
              {(currentFrame + 1).toString().padStart(2, '0')} <span className="text-white/20">/ {FRAME_COUNT}</span>
            </p>
          </div>
          <div className="h-32 w-px bg-white/10 ml-auto relative">
            <motion.div 
              style={{ height: `${((currentFrame + 1) / FRAME_COUNT) * 100}%` }}
              className="absolute top-0 left-[-2.5px] w-1.5 bg-brand-accent transition-all duration-100 shadow-[0_0_15px_rgba(96,165,250,0.5)]"
            />
          </div>
        </div>

        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
