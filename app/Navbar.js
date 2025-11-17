"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full px-6 py-4 fixed top-0 left-0 z-40 transition-all duration-300 
        ${
          scrolled
            ? "bg-[#0f0f11]/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        {/* LOGO + TEXT (Desktop) */}
        <div className="flex items-center gap-3">
          <Image
            src="/Logo1.png"
            alt="Rishabh Labs Logo"
            width={40}
            height={40}
            className="hidden md:block"
          />

          <span className="hidden md:block text-xl font-bold tracking-wide text-white drop-shadow-[0_0_6px_rgba(79,209,197,0.4)]">
            Rishabh Labs
          </span>

          {/* MOBILE — Only the logo */}
          <Image
            src="/Logo.png"
            alt="Rishabh Labs Logo"
            width={30}
            height={30}
            className="md:hidden"
          />
        </div>

        {/* Desktop Navigation */}
        <motion.ul
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-slate-200"
        >
          {["home", "services", "portfolio", "about", "contact"].map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="hover:text-[#4FD1C5] transition">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-full px-4 py-2 bg-[#4FD1C5] text-black font-semibold shadow-lg hover:bg-[#38b3ab] transition"
          >
            Connect With Me
          </a>
        </div>

        {/* Mobile CTA & Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="#contact"
            className="rounded-full px-4 py-2 bg-[#4FD1C5] text-black font-semibold shadow-lg hover:bg-[#38b3ab] transition"
          >
            Connect
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-slate-200 text-3xl flex items-center justify-center"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0f0f11]/95 backdrop-blur-xl border-b border-white/10 
                     px-6 py-6 mt-4 space-y-6 text-slate-200 text-lg"
        >
          {["home", "services", "portfolio", "about", "contact"].map((item) => (
            <a
              key={item}
              onClick={() => setMenuOpen(false)}
              href={`#${item}`}
              className="block hover:text-[#4FD1C5] transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
