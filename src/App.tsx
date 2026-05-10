import ScrollyCanvas from "./components/ScrollyCanvas";
import Projects from "./components/Projects";
import { MoveRight } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  return (
    <main className="bg-brand-bg text-white relative">
      {/* Background Mesh Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 mesh-grid opacity-20" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-10 flex justify-between items-start z-[100] mix-blend-difference">
        <div className="flex flex-col gap-1">
          <span className="text-xl font-bold tracking-tighter">BMHK</span>
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Solution Engineer / 4+ yr Exp</span>
        </div>
        <div className="flex gap-8 items-center text-[11px] uppercase tracking-[0.2em] font-semibold">
           <a
            href="#work"
            className="hover:text-brand-accent transition-colors"
          >
            Works
          </a>

          <a
            href="#"
            className="hover:text-brand-accent transition-colors"
          >
            Studio
          </a>

          <a
            href="tel:+916309291761"
            className="hover:text-brand-accent transition-colors"
          >
            +91 6309291761
          </a>

          <a
            href="https://www.linkedin.com/in/bmhk/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-white text-black rounded-full text-[10px] font-black cursor-pointer hover:scale-105 transition-transform"
          >
            GET IN TOUCH
          </a>
        </div>
      </nav>

      {/* Vertical UI Rails */}
      <aside className="fixed left-10 bottom-10 z-[100] hidden lg:flex flex-col gap-10 mix-blend-difference">
        <div className="flex flex-col gap-4 text-[10px] text-zinc-500 font-mono tracking-widest">
          <p className="rotate-[-90deg] origin-left mb-12 whitespace-nowrap uppercase">Follow / Instagram</p>
          <p className="rotate-[-90deg] origin-left mb-12 whitespace-nowrap uppercase">Follow / Twitter</p>
        </div>
      </aside>

      {/* Hero Scrolly Section */}
      <ScrollyCanvas />

    

      {/* Work Grid */}
      <div id="work">
        <Projects />
      </div>

      {/* Footer */}
      <footer className="px-10 md:px-24 py-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 bg-brand-bg relative z-10">
        <div className="flex flex-col items-center md:items-start gap-4">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30">
            © 2026 BMHK — SOLUTION ENGINEER
          </p>
          <div className="flex gap-8">
            <a href="mailto:bmhk921@gmail.com" className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">Email</a>
            <a href="https://linkedin.com/in/bmhk" className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/BeegalaMHK" className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
        
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex flex-col items-center gap-4 text-[10px] font-mono uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors"
        >
          <div className="w-px h-12 bg-white/20 group-hover:h-16 transition-all relative">
            <motion.div 
              animate={{ y: [-48, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/4 bg-brand-accent"
            />
          </div>
          Back to top
        </button>
      </footer>
    </main>
  );
}
