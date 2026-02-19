"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCode, FiLayers } from "react-icons/fi";

export default function Portfolio() {
  const projects = [
    {
      title: "PingMyDB",
      desc: "A database monitoring SaaS that tracks uptime and availability through automated health checks and real-time alerts. It provides a clean dashboard to visualize uptime percentage, downtime duration, and incident history.",
      impact: "Monitoring live databases at ~99% service uptime.",
      img: "/pingmydb.png",
      link: "https://pingmydb-frontend-xozimayiwa-uc.a.run.app/",
      tech: ["Node.js", "React", "PostgreSQL", "Redis", "TailwindCSS"],
      color: "#4FD1C5"
    },
    {
      title: "Mangalam Florist",
      desc: "A production-ready business website built for a local florist, focused on lead generation, product discovery, and mobile-first usability. Features optimized performance and integrated online payments.",
      impact: "Fast load times & integrated online payments.",
      img: "/mangalam.png",
      link: "https://mangalamflorist.com",
      tech: ["Next.js", "React", "TailwindCSS", "Framer Motion", "SEO"],
      color: "#7F5AF0"
    },
    {
      title: "Codekea",
      desc: "An independent startup focused on building high-quality web applications. Designing and developing end-to-end full-stack solutions with a strong emphasis on performance and clean architecture.",
      impact: "End-to-end product delivery for startups.",
      img: "/codekea.png",
      link: "https://codekea.com",
      tech: ["Next.js", "Full-Stack", "Architecture", "Consulting"],
      color: "#FFD166"
    },
    {
      title: "Inknest",
      desc: "A premium digital agency platform designed for high-end brand storytelling and service discovery. Features an ultra-responsive liquid layout, deep SEO optimization, and a production-ready architecture tailored for creative businesses looking to scale their digital presence.",
      impact: "Delivered a high-conversion digital flagship.",
      img: "/inknest.png",
      link: "https://inknest.in",
      tech: ["Next.js", "React.js", "TailwindCSS", "Framer Motion"],
      color: "#7F5AF0"
    },
  ];

  return (
    <section id="portfolio" className="relative py-32 px-6 bg-transparent">
      {/* Background Decor & Seamless Blending */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#4fd1c505] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#7f5af003] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#4FD1C5] font-mono text-xs tracking-[0.3em] uppercase mb-4 block"
            >
              Selected Works
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-white tracking-tight"
            >
              Building <span className="text-white/20 italic font-serif">Impact</span> through code.
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-[#121214] border border-white/5 rounded-[3rem] overflow-hidden flex flex-col"
    >
      {/* IMAGE CONTAINER */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.img}
          alt={project.title}
          fill
          className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        {/* Hover Highlight Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-60" />
        
        {/* Tech Badges on Image */}
        <div className="absolute top-6 left-6 flex flex-wrap gap-2">
           {project.tech.slice(0, 3).map((t, idx) => (
             <span key={idx} className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/70 uppercase tracking-wider">
               {t}
             </span>
           ))}
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="p-10 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-[#4FD1C5] transition-colors">
              {project.title}
            </h3>
            <p className="text-white/40 text-sm italic font-medium">
              {project.impact}
            </p>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#4FD1C5] hover:text-black hover:border-[#4FD1C5] transition-all"
          >
            <FiArrowUpRight size={20} />
          </a>
        </div>

        <p className="text-white/60 leading-relaxed mb-8 flex-grow">
          {project.desc}
        </p>

        <div className="pt-6 border-t border-white/5 flex items-center gap-4">
           <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#4FD1C5]/20 border border-white/10 flex items-center justify-center text-[#4FD1C5]">
                <FiCode size={14} />
              </div>
              <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 border border-white/10 flex items-center justify-center text-[#7F5AF0]">
                <FiLayers size={14} />
              </div>
           </div>
           <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
             Engineering Excellence
           </span>
        </div>
      </div>
    </motion.div>
  );
}
