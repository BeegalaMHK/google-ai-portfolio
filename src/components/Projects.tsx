import { motion } from "motion/react";
import { PROJECT_DATA } from "../lib/constants";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section className="relative px-6 md:px-24 py-48 bg-brand-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-brand-accent mb-6 font-bold">
              Archive / 024-026
            </p>
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.8] uppercase">
              Selected <br />
              <span className="text-white/20">Works.</span>
            </h2>
          </motion.div>
          <div className="md:w-1/3">
            <p className="text-white/40 text-sm leading-relaxed mb-8 font-medium">
              A curated collection of digital artifacts that bridge the gap between human intuition and machine precision. Focused on performance, high-fidelity interaction, and aesthetic integrity.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {PROJECT_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index % 2 === 0 ? 0 : 0.2 }}
              className="group relative"
            >
              <div className="aspect-[16/10] mb-10 overflow-hidden rounded-2xl bg-white/[0.02] border border-white/5 relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-bg/20 group-hover:bg-transparent transition-colors duration-500" />
                
               
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center text-brand-accent">
                    <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase">{project.category}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 transition-transform" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight uppercase group-hover:text-brand-accent transition-colors duration-500">{project.title}</h3>
                <p className="text-white/40 text-sm max-w-md leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Decorative line */}
              <div className="w-full h-px bg-white/5 mt-10 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 bg-brand-accent/50" />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-64 text-center"
        >
           <div className="inline-block p-1 bg-white/5 rounded-full mb-12">
             <div className="px-8 py-3 bg-brand-accent text-black rounded-full text-xs font-black tracking-widest uppercase cursor-pointer hover:bg-white transition-colors">
               Start a conversation
             </div>
           </div>
           
           <div className="flex flex-col gap-4 mt-12">
             <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/20">Architecting the future since 2020</p>
             <h2 className="text-3xl md:text-5xl font-light tracking-tighter text-white/40">bmhk921@gmail.com</h2>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
