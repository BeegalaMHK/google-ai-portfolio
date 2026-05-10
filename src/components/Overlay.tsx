import { motion, useTransform, MotionValue } from "motion/react";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: Intro (Center) - Frames 0-30 (0-0.25)
  const introOpacity = useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 1, 0]);
  const introScale = useTransform(scrollYProgress, [0, 0.25], [1, 1.2]);
  const introBlur = useTransform(scrollYProgress, [0, 0.25], ["blur(0px)", "blur(20px)"]);

  // Section 2: Methodology (Left) - Frames 30-60 (0.25-0.5)
  const methodOpacity = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const methodY = useTransform(scrollYProgress, [0.25, 0.55], [40, -40]);

  // Section 3: Engineering (Right) - Frames 55-85 (0.55-0.75)
  const engOpacity = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
  const engSkew = useTransform(scrollYProgress, [0.55, 0.85], ["skewX(0deg)", "skewX(-10deg)"]);

  // Section 4: Final Vision - Frames 85-119 (0.85-1.0)
  const visionOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const visionScale = useTransform(scrollYProgress, [0.85, 1], [0.8, 1]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Section 1: Title */}
      <motion.div 
        style={{ opacity: introOpacity, scale: introScale, filter: introBlur }}
        className="absolute inset-0 flex items-center justify-center p-8"
      >
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[15vw] font-black tracking-tighter leading-[0.8] mix-blend-difference uppercase text-center">
              BMHK
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[10px] tracking-[0.6em] uppercase text-white/50 mt-12 font-bold font-mono"
          >
            Solution Engineer — Frontend Architect
          </motion.p>
        </div>
      </motion.div>

      {/* Section 2: Philosophy */}
      <motion.div 
        style={{ opacity: methodOpacity, y: methodY }}
        className="absolute inset-0 flex items-center justify-start p-12 md:p-32"
      >
        <div className="max-w-2xl">
          <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-brand-accent mb-8 font-bold">
            01 / PHILOSOPHY
          </p>
          <h2 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9] text-white">
            SCALABLE <br />
            <span className="text-white/20">RESILIENT</span> <br />
            ARCHITECTURE.
          </h2>
        </div>
      </motion.div>

      {/* Section 3: Engineering */}
      <motion.div 
        style={{ opacity: engOpacity, transform: engSkew }}
        className="absolute inset-0 flex items-center justify-end p-12 md:p-32 text-right"
      >
        <div className="max-w-2xl">
          <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-brand-accent mb-8 font-bold">
            02 / CRAFT
          </p>
          <h2 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9] text-white">
            PIXEL <br />
            <span className="text-white/20">PERFECT</span> <br />
            REACT.JS
          </h2>
        </div>
      </motion.div>

      {/* Section 4: Vision */}
      <motion.div 
        style={{ opacity: visionOpacity, scale: visionScale }}
        className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
      >
        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter max-w-4xl text-glow">
          Bridging the gap between design vision and engineering reality.
        </h2>
        <div className="mt-12 flex gap-4">
           {["REACT", "NEXT.JS", "TYPESCRIPT"].map((word, i) => (
             <div key={i} className="px-6 py-2 border border-white/10 rounded-full text-[10px] font-mono tracking-widest text-white/40">
               {word}
             </div>
           ))}
        </div>
      </motion.div>

      {/* Side HUD: Scroll Progress */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-8 mix-blend-difference hidden lg:flex">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-4 group">
            <div className="text-[9px] font-mono text-white/20 group-hover:text-white transition-colors">0{i+1}</div>
            <div className="w-8 h-px bg-white/10 group-hover:w-12 group-hover:bg-brand-accent transition-all" />
          </div>
        ))}
      </div>

      {/* Scroll Hint */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ opacity: introOpacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-white/20 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ top: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-1/2 bg-brand-accent"
          />
        </div>
      </motion.div>
    </div>
  );
}
