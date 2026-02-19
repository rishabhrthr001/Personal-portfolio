"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { FiArrowUp, FiMail } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-transparent pt-32 pb-12 px-6 overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#4fd1c503] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          {/* BRAND AREA */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                <Image
                  src="/RishabhLabs.png"
                  alt="Logo"
                  width={28}
                  height={28}
                  className="opacity-80"
                />
              </div>
              <span className="text-xl font-black text-white tracking-tighter">
                RISHABH LABS
              </span>
            </div>
            <p className="text-white/40 text-lg leading-relaxed max-w-sm mb-10">
              Architecting the next generation of digital ecosystems. 
              Built with precision, powered by innovation.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaGithub />, href: "https://github.com/rishabhrthr001" },
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/rishabh-rathore-115478228" },
                { icon: <FaTwitter />, href: "#" },
                { icon: <FaInstagram />, href: "#" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/40 hover:text-[#4FD1C5] hover:border-[#4FD1C5]/30 hover:bg-[#4FD1C5]/5 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* NAV LINKS */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Navigation</h4>
              <ul className="space-y-4">
                {["Home", "Expertise", "Portfolio", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-white/40 text-sm hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Legal</h4>
              <ul className="space-y-4">
                {["Privacy Policy", "Terms & Conditions"].map((item) => (
                  <li key={item}>
                    <a href={`/${item.toLowerCase().replace(/ /g, "-")}`} className="text-white/40 text-sm hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Hire Me</h4>
              <a 
                href="mailto:Rishabh.rthr001@gmail.com"
                className="group flex items-center gap-3 text-white/40 hover:text-[#4FD1C5] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:bg-[#4FD1C5]/10">
                  <FiMail size={16} />
                </div>
                <span className="text-sm font-medium">Rishabh.rthr001@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-8">
          <p className="text-white/20 text-[10px] font-mono uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Rishabh Labs. All Rights Reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-white/20 hover:text-white transition-colors capitalize text-xs font-bold tracking-widest"
          >
            Back to Top
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white transition-all group-hover:-translate-y-1">
              <FiArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
