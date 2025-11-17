"use client";

import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      title: "Code Together",
      desc: "A collaborative DSA practice platform where users solve problems, create private lobbies, and code together in real-time.",
      impact: "Built for real-time collaboration with zero reloads.",
      img: "/project1.png",
      video: "/project1.mp4",
      link: "https://code-together-rzis.vercel.app",
      reverse: false,
      tech: ["WebSockets", "Node.js", "React", "Express", "MongoDB"],
      delay: 0.1,
    },
    {
      title: "Shri Hardev Packers",
      desc: "A modern SEO-friendly product showcase website for a real-world business.",
      impact: "Delivered to a real client for branding and catalog.",
      img: "/project2.png",
      video: "/project2.mp4",
      link: "https://shrihardevpackers.in",
      reverse: true,
      tech: ["Next.js", "React.js", "TailwindCSS", "Framer Motion"],
      delay: 0.2,
    },
    {
      title: "BlockPay",
      desc: "A Web3 rewards platform with ERC-20 tokens, bonuses, and wallet integration.",
      impact: "Smart contracts fully deployed & connected.",
      img: "/project3.png",
      video: "/project3.mp4",
      link: "https://block-pay-9v2f.vercel.app/",
      reverse: false,
      tech: ["Solidity", "React.js", "TailwindCSS", "Ethers.js", "Node.js"],
      delay: 0.3,
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative min-h-screen bg-[#0f0f11] text-white py-24 px-6 overflow-hidden"
    >
      {/* Center teal glow */}
      <div
        className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px]
        bg-[#4fd1c525] blur-[180px] rounded-full pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-16">
          My Projects
        </h2>

        <div className="flex flex-col gap-24">
          {projects.map((p, i) => {
            const videoRef = useRef(null);

            // play only on hover
            const handleMouseEnter = () => {
              const v = videoRef.current;
              if (!v) return;
              v.currentTime = 0;
              v.play().catch(() => {});
            };

            const handleMouseLeave = () => {
              const v = videoRef.current;
              if (!v) return;
              v.pause();
              v.currentTime = 0;
            };

            const openFullscreen = () => {
              const v = videoRef.current;
              if (!v) return;
              if (v.requestFullscreen) v.requestFullscreen();
              else if (v.webkitEnterFullscreen) v.webkitEnterFullscreen();
            };

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: p.delay }}
                className={`flex flex-col md:flex-row ${
                  p.reverse ? "md:flex-row-reverse" : ""
                } items-center gap-10`}
              >
                {/* THUMBNAIL + VIDEO */}
                <motion.div
                  className="relative group w-full md:w-1/2 overflow-hidden 
                             rounded-2xl border border-[#1f1f22] shadow-lg shadow-black/40"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Thumbnail (visible by default) */}
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-opacity duration-500
                               group-hover:opacity-0"
                  />

                  {/* Video (hidden until hover) */}
                  <video
                    ref={videoRef}
                    src={p.video}
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    onClick={openFullscreen}
                  />

                  {/* Controls (only appear on hover) */}
                  <div
                    className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm 
                               py-2 flex justify-center gap-4 opacity-0 
                               group-hover:opacity-100 transition-opacity text-white"
                  >
                    <button
                      onClick={() => {
                        if (videoRef.current) videoRef.current.currentTime -= 5;
                      }}
                      className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded text-sm"
                    >
                      ⏪ 5s
                    </button>

                    <button
                      onClick={openFullscreen}
                      className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded text-sm"
                    >
                      ⛶ Fullscreen
                    </button>

                    <button
                      onClick={() => {
                        if (videoRef.current) videoRef.current.currentTime += 5;
                      }}
                      className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded text-sm"
                    >
                      5s ⏩
                    </button>
                  </div>
                </motion.div>

                {/* TEXT */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h3 className="text-3xl font-semibold mb-4">{p.title}</h3>

                  <p className="text-gray-400 mb-3 leading-relaxed">{p.desc}</p>

                  <p className="text-teal-300 mb-6 italic text-sm">
                    {p.impact}
                  </p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                    {p.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm border border-[#333] rounded-full text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 
                               border border-[#444] rounded-lg text-gray-200
                               hover:bg-[#1a1a1d] hover:border-[#4FD1C5] transition"
                  >
                    <FaExternalLinkAlt />
                    Visit Project
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
