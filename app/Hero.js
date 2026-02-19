"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin, FiTerminal } from "react-icons/fi";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#0a0a0f]"
    >
      {/* 🌌 IMMERSIVE BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Mesh Gradients - Increased visibility */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[-10%] left-[-5%] w-[70%] h-[70%] bg-[#4fd1c515] blur-[160px] rounded-full" 
        />
        <motion.div 
          style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
          className="absolute bottom-[-5%] right-[-5%] w-[60%] h-[60%] bg-[#7f5af015] blur-[160px] rounded-full" 
        />
        
        {/* Central Lighting Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,209,197,0.08),transparent_70%)]" />

        {/* Subtle Noise + Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT: TEXT CONTENT */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="group mb-10 flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl"
          >
            <div className="flex h-2 w-2 rounded-full bg-[#4FD1C5] shadow-[0_0_12px_#4FD1C5]" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/50 group-hover:text-white/80 transition-colors">
              Systems Architect & Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.85] text-white mb-8"
          >
            CRAFTING <br />
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FD1C5] via-[#7F5AF0] to-[#4FD1C5] bg-[length:200%_auto] animate-gradient-mask">
                CODE
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-[#4FD1C5]/0 via-[#4FD1C5]/40 to-[#4FD1C5]/0" />
            </span>
            <br />
            POETRY.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl text-white/40 text-lg md:text-xl leading-relaxed mb-12 font-medium"
          >
            I build digital ecosystems that bridge the gap between 
            <span className="text-white"> human experience </span> and 
            <span className="text-[#4FD1C5]"> technical precision</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a
              href="#portfolio"
              className="group relative px-10 py-5 rounded-2xl bg-white text-black font-bold overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-3">
                View Portfolio <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <div className="flex items-center gap-4">
              {[
                { icon: <FiGithub size={22} />, href: "https://github.com/rishabhrthr001" },
                { icon: <FiLinkedin size={22} />, href: "https://www.linkedin.com/in/rishabh-rathore-115478228" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT CONTENT: VISUAL ACCENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden lg:flex lg:col-span-5 justify-center relative"
        >
          {/* Central Hub */}
          <div className="relative w-80 h-80">
             <div className="absolute inset-0 bg-[#4FD1C5]/10 rounded-full blur-[80px] animate-pulse" />
             <div className="absolute inset-10 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
             <div className="absolute inset-20 border border-[#7F5AF0]/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
             
             {/* Floating Code Card */}
             <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 p-6 bg-[#121214]/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl"
             >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="space-y-3 font-mono text-[10px]">
                  <p className="text-[#4FD1C5]">class Rishabh extends Developer {'{'}</p>
                  <p className="text-white/60 pl-4">constructor() {'{'}</p>
                  <p className="text-[#7F5AF0] pl-8">this.vision = "Unbound";</p>
                  <p className="text-[#7F5AF0] pl-8">this.stack = ["Web3", "FullStack"];</p>
                  <p className="text-white/60 pl-4">{'}'}</p>
                  <p className="text-[#4FD1C5]">{'}'}</p>
                </div>
             </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient-mask {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-mask {
          animation: gradient-mask 6s ease infinite;
        }
      `}</style>
    </section>
  );
}
