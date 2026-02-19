"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaCode, FaCoffee, FaRocket, FaTerminal } from "react-icons/fa";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";

export default function About() {
  const highlights = [
    { title: "BCA & MCA Graduate", desc: "Solid academic foundation in computer science." },
    { title: "Full-Stack Mastery", desc: "Expertise across the entire development lifecycle." },
    { title: "Web3 Specialist", desc: "Architecting secure, decentralized solutions." },
    { title: "UI/UX Focused", desc: "Designing for the human element." },
  ];

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden bg-transparent">
      {/* Seamless Transition Glows */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#7f5af003] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#4fd1c503] blur-[140px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT: IMAGE & STATS */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 group"
            >
              <Image
                src="/golu.jpg"
                alt="Rishabh Rathore"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-60" />
              
              {/* Floating ID Card Overlay */}
              <div className="absolute bottom-10 left-10 right-10 p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10">
                 <p className="text-white font-bold text-xl mb-1">Rishabh Rathore</p>
                 <p className="text-[#4FD1C5] font-mono text-xs uppercase tracking-widest">Lead Engineer @ Codekea</p>
              </div>
            </motion.div>

            {/* Exp Badge */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-[#7F5AF0] flex flex-col items-center justify-center text-black border-4 border-[#050507] shadow-2xl z-20"
            >
               <span className="text-3xl font-black">1+</span>
               <span className="text-[10px] font-bold uppercase tracking-tighter">Year Exp.</span>
            </motion.div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="lg:col-span-7">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#4FD1C5] font-mono text-xs tracking-[0.3em] uppercase mb-6 block"
            >
              The Architect
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8"
            >
              Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FD1C5] to-[#7F5AF0]">Unseen.</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6 text-white/60 text-lg leading-relaxed mb-10"
            >
              <p>
                I am a Software Architect and Full-Stack Developer driven by the pursuit of 
                technical excellence. My philosophy is simple: write code that is as 
                robust as it is elegant. I don't just build websites; I engineer 
                digital experiences that scale.
              </p>
              <p>
                With a background in MCA and a deep passion for Web3, I’ve dedicated my 
                career to bridging the gap between archaic systems and the decentralized 
                future. I specialize in the MERN stack, Next.js, and high-security 
                smart contracts.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {highlights.map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                   <FiCheckCircle className="text-[#4FD1C5] mt-1 shrink-0" />
                   <div>
                     <p className="text-white font-bold text-sm mb-1">{item.title}</p>
                     <p className="text-white/40 text-xs">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>

            {/* CTA & Socials */}
            <div className="flex flex-wrap items-center gap-6">
               <a 
                 href="https://github.com/rishabhrthr001" 
                 target="_blank"
                 className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
               >
                 <FaGithub size={24} />
                 <span className="text-sm font-bold uppercase tracking-widest">Connect on GitHub</span>
                 <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </a>
               <a 
                 href="https://www.linkedin.com/in/rishabh-rathore-115478228" 
                 target="_blank"
                 className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
               >
                 <FaLinkedin size={24} />
                 <span className="text-sm font-bold uppercase tracking-widest">Meet on LinkedIn</span>
                 <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
