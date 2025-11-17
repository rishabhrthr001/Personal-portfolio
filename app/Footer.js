"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#0f0f11] text-gray-300 border-t border-white/10 pt-16 pb-10 px-6 overflow-hidden">
      {/* Center Teal Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 
        w-[600px] h-[600px] bg-[#4fd1c525] blur-[160px] 
        rounded-full pointer-events-none"
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* LEFT — Logo + Tagline */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/Logo.png"
              alt="Rishabh Labs Logo"
              width={42}
              height={42}
              className="opacity-90"
            />
            <span className="text-xl font-semibold text-white">
              Rishabh Labs
            </span>
          </div>

          <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
            Building fast, modern, and scalable apps, websites, and Web3
            solutions. Focused on clean UI, strong engineering, and real-world
            impact.
          </p>

          <div className="flex gap-4 text-xl mt-2">
            <a
              href="https://github.com/rishabhrthr001"
              target="_blank"
              className="hover:text-[#4FD1C5] transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rishabh-rathore-115478228"
              target="_blank"
              className="hover:text-[#4FD1C5] transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* CENTER — Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>

          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a href="#home" className="hover:text-[#4FD1C5]">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#4FD1C5]">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-[#4FD1C5]">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#4FD1C5]">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#4FD1C5]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT — Legal */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Legal</h4>

          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a href="/privacy-policy" className="hover:text-[#4FD1C5]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-and-conditions" className="hover:text-[#4FD1C5]">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Center Line */}
      <div className="relative z-10 text-center mt-14 text-xs text-gray-500">
        © {new Date().getFullYear()} Rishabh Labs. All Rights Reserved.
      </div>
    </footer>
  );
}
