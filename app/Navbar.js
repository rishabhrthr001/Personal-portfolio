"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    // Active Section Tracking
    const observerOptions = { threshold: 0.5, rootMargin: "-10% 0px -70% 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSegment(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = ["home", "expertise", "portfolio", "about", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Expertise", id: "expertise" },
    { name: "Portfolio", id: "portfolio" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-6 py-8 pointer-events-none">
      <nav className="max-w-5xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* LOGO PILL */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className={`group flex items-center gap-3 px-4 py-2 rounded-full border transition-all duration-700
            ${scrolled 
              ? "bg-[#0a0a0f]/80 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" 
              : "bg-white/[0.03] backdrop-blur-md border-white/5"}`}
        >
          <a href="#home" className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-white/5 p-1.5 border border-white/10 group-hover:border-[#4FD1C5]/50 transition-colors">
              <Image
                src="/RishabhLabs.png"
                alt="Logo"
                width={24}
                height={24}
                className="transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <span className="text-white font-black text-[10px] tracking-[0.2em] uppercase hidden sm:block">
              RISHABH LABS
            </span>
          </a>
        </motion.div>

        {/* DESKTOP NAV PILL - SMART TRACKER */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full border transition-all duration-700
            ${scrolled 
              ? "bg-[#0a0a0f]/80 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" 
              : "bg-white/[0.03] backdrop-blur-md border-white/5"}`}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-colors
                ${activeSegment === link.id ? "text-white" : "text-white/40 hover:text-white/70"}`}
            >
              <span className="relative z-10">{link.name}</span>
              {activeSegment === link.id && (
                <motion.div
                  layoutId="activeNavPill"
                  className="absolute inset-0 bg-white/10 rounded-full border border-white/10 shadow-inner"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          ))}
        </motion.div>

        {/* CTA PILL */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <a
            href="#contact"
            className="group hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#4FD1C5] text-black text-[10px] font-black uppercase tracking-widest shadow-[0_0_20px_rgba(79,209,197,0.3)] hover:shadow-[0_0_30px_rgba(79,209,197,0.5)] hover:bg-[#3bb1a6] active:scale-95 transition-all"
          >
            Hire Me <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-3 rounded-full border transition-all duration-500
              ${scrolled 
                ? "bg-[#0a0a0f]/80 backdrop-blur-2xl border-white/10" 
                : "bg-white/[0.03] backdrop-blur-md border-white/5"} text-white active:scale-90`}
          >
            {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </motion.div>
      </nav>

      {/* MOBILE HUD MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-28 left-6 right-6 p-8 rounded-[2.5rem] bg-[#0a0a0f]/95 backdrop-blur-3xl border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.8)] md:hidden pointer-events-auto"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between px-2 py-1 group"
                >
                  <span className={`text-2xl font-bold tracking-tight ${activeSegment === link.id ? "text-[#4FD1C5]" : "text-white/40 group-hover:text-white"}`}>
                    {link.name}
                  </span>
                  <div className={`w-8 h-px bg-[#4FD1C5] transition-all duration-500 ${activeSegment === link.id ? "w-12 opacity-100" : "w-0 opacity-0"}`} />
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 w-full py-5 rounded-2xl bg-[#4FD1C5] text-black text-center font-black tracking-widest text-xs uppercase shadow-xl"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
