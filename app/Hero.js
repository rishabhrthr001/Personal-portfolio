"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen"
    >
      <div
        className="absolute top-40 left-1/2 -translate-x-1/2 
                  w-[600px] h-[600px] 
                  bg-[#4fd1c525] 
                  blur-[160px] 
                  rounded-full pointer-events-none"
      ></div>
      <div className="z-20 text-center px-6 max-w-3xl mx-auto">
        {/* MAIN TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
          style={{
            fontFamily:
              "'Montserrat', system-ui, -apple-system, 'Segoe UI', Roboto",
          }}
        >
          Websites. Apps. Web3 Solutions.
        </motion.h1>

        {/* NEW SUBTITLE = business-oriented, trust-focused */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-4 max-w-2xl mx-auto text-slate-300 text-lg"
        >
          I build modern, high-performance digital products for startups and
          businesses—websites, apps, dashboards, and smart contract powered
          systems. Fast, clean and crafted with real attention to detail.
        </motion.p>

        {/* MICRO TRUST LINE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-3 text-slate-400 text-sm"
        >
          Available for freelance projects • Quick response guaranteed
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#4FD1C5] text-black font-semibold shadow-xl hover:scale-105 transition-transform"
          >
            Start a Project
          </a>
          <a
            href="#portfolio"
            className="px-6 py-3 rounded-full border border-slate-700 text-slate-200 hover:bg-white/5 transition"
          >
            View My Work
          </a>
        </motion.div>
      </div>

      {/* Bottom arcs */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <Arcs />
      </div>
    </section>
  );
}

function Arcs() {
  return (
    <div className="w-full overflow-hidden">
      <svg viewBox="0 0 1200 260" className="w-full h-[260px]">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Top arc - green */}
        <g transform="translate(0,20)">
          <path
            d="M50,200 A500,500 0 0,1 1150,200"
            fill="none"
            stroke="#1ED760"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.12"
          />
          <circle r="8" fill="#1ED760" filter="url(#glow)">
            <animateMotion
              dur="6s"
              repeatCount="indefinite"
              path="M50,200 A500,500 0 0,1 1150,200"
            />
          </circle>
        </g>

        {/* Middle arc - yellow */}
        <g transform="translate(0,70)">
          <path
            d="M80,200 A450,450 0 0,1 1120,200"
            fill="none"
            stroke="#FFD166"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.12"
          />
          <circle r="7" fill="#FFD166" filter="url(#glow)">
            <animateMotion
              dur="5.2s"
              repeatCount="indefinite"
              path="M80,200 A450,450 0 0,1 1120,200"
            />
          </circle>
        </g>

        {/* Bottom arc - blue */}
        <g transform="translate(0,120)">
          <path
            d="M100,200 A400,400 0 0,1 1100,200"
            fill="none"
            stroke="#4FD1C5"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.12"
          />
          <circle r="6" fill="#4FD1C5" filter="url(#glow)">
            <animateMotion
              dur="4.6s"
              repeatCount="indefinite"
              path="M100,200 A400,400 0 0,1 1100,200"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
}
