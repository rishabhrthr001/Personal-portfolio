"use client";

import { motion } from "framer-motion";
import { 
  SiSolidity, SiNextdotjs, SiNodedotjs, SiReact, 
  SiTailwindcss, SiMongodb, SiPostgresql, SiTypescript,
  SiFramer, SiWeb3Dotjs, SiEthers, SiDocker
} from "react-icons/si";
import { FiCode, FiCpu, FiGlobe, FiLayers } from "react-icons/fi";

export default function Expertise() {
  const techLogos = [
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiReact />, name: "React" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiSolidity />, name: "Solidity" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiFramer />, name: "Framer" },
  ];

  return (
    <section id="expertise" className="relative py-32 px-6 overflow-hidden bg-transparent">
      {/* Seamless Transition Glows */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-[#4fd1c505] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-[#7f5af008] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#4fd1c505] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#4FD1C5] font-mono text-sm tracking-[0.2em] uppercase mb-4 block"
          >
            Technical Stack
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
          >
            Capabilities & <span className="text-white/40">Expertise.</span>
          </motion.h2>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          
          {/* Main Card - Full Stack */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-2 bg-[#121214] border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
              <FiCode size={240} />
            </div>
            
            <div>
              <div className="w-12 h-12 bg-[#4FD1C5]/10 rounded-2xl flex items-center justify-center text-[#4FD1C5] mb-8">
                <FiGlobe size={24} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Full Stack Architecture</h3>
              <p className="text-slate-400 text-lg max-w-md leading-relaxed">
                Building end-to-end digital products with a focus on high-performance 
                frontends and resilient backend systems. Specializing in React, 
                Next.js, and modern state management.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {["Next.js", "React", "TypeScript", "Tailwind", "Redux"].map(tag => (
                <span key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-xs font-mono text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Web3 Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 md:row-span-1 bg-[#121214] border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between relative overflow-hidden group"
          >
             <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity rotate-12">
              <SiSolidity size={120} />
            </div>
            <div className="w-10 h-10 bg-[#7F5AF0]/10 rounded-xl flex items-center justify-center text-[#7F5AF0]">
              <FiLayers size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Web3 & dApps</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Smart contracts, DeFi logic, and blockchain integration.
              </p>
            </div>
          </motion.div>

          {/* Backend Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 md:row-span-1 bg-[#121214] border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity -rotate-12">
              <FiCpu size={120} />
            </div>
            <div className="w-10 h-10 bg-[#FFD166]/10 rounded-xl flex items-center justify-center text-[#FFD166]">
              <SiNodedotjs size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">System Design</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Scalable APIs, database optimization, and cloud infrastructure.
              </p>
            </div>
          </motion.div>

          {/* Tools Marquee Card */}
          <motion.div className="md:col-span-3 bg-[#121214] border border-white/5 rounded-[2.5rem] p-8 overflow-hidden">
            <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
              {[...techLogos, ...techLogos].map((tech, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-400 group cursor-default">
                  <span className="text-2xl group-hover:text-[#4FD1C5] transition-colors">{tech.icon}</span>
                  <span className="text-xs font-mono tracking-widest uppercase group-hover:text-white transition-colors">{tech.name}</span>
                  <span className="w-1 h-1 bg-white/10 rounded-full mx-4" />
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
