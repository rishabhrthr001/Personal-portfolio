"use client";

import { SiSolidity, SiNextdotjs, SiNodedotjs } from "react-icons/si";
import { MdWeb, MdAppShortcut } from "react-icons/md";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Full-Stack Web Apps",
      icon: <MdWeb size={50} className="text-green-400" />,
      desc: "Modern, scalable full-stack applications crafted for performance, reliability, and clean UI/UX.",
      points: [
        "Next.js / MERN stack development",
        "UI/UX-focused frontend",
        "Fully integrated backend and APIs",
      ],
      delay: 0.1,
    },
    {
      title: "Mobile Applications",
      icon: <MdAppShortcut size={50} className="text-yellow-400" />,
      desc: "High-quality cross-platform mobile apps that feel fast, polished, and smooth on every device.",
      points: [
        "React Native / Expo development",
        "Web3 wallet & payment integrations",
        "Offline support + optimized performance",
      ],
      delay: 0.2,
    },
    {
      title: "Smart Contracts",
      icon: <SiSolidity size={50} className="text-blue-400" />,
      desc: "Secure, gas-optimized smart contracts built with clean architecture and best practices.",
      points: [
        "ERC20, ERC721, ERC1155 token contracts",
        "Cross-chain bridge development",
        "Contract audits & deployment support",
      ],
      delay: 0.3,
    },
    {
      title: "Node.js Backend APIs",
      icon: <SiNodedotjs size={50} className="text-lime-400" />,
      desc: "Robust, scalable backend systems optimized for speed, security, and heavy workloads.",
      points: [
        "REST + GraphQL API development",
        "Authentication & authorization flows",
        "High-performance backend architecture",
      ],
      delay: 0.4,
    },
  ];

  return (
    <section
      id="services"
      className="relative min-h-screen bg-[#0f0f11] text-white py-24 px-6 overflow-hidden"
    >
      {/* ✅ SAME TEAL CENTER GLOW AS HERO & PRICING */}
      <div
        className="absolute top-40 left-1/2 -translate-x-1/2 
                   w-[700px] h-[700px] 
                   bg-[#4fd1c525] 
                   blur-[160px] rounded-full pointer-events-none"
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-6 tracking-tight">
          What I Offer
        </h2>
        <p className="text-gray-400 mb-16 text-lg">
          I create end-to-end digital products built for real-world use—fast,
          scalable, secure, and designed with a clean, modern interface. From
          frontend polish to backend architecture and Web3 logic, everything is
          engineered to perform and built to last.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: s.delay }}
              className="bg-[#151517] border border-[#242427] rounded-3xl p-10 
                         flex flex-col items-center text-center 
                         hover:scale-105 hover:border-[#4FD1C5] 
                         transition-all shadow-lg shadow-black/40"
            >
              <div className="mb-5">{s.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
              <p className="text-gray-400 mb-5">{s.desc}</p>

              <ul className="text-gray-500 text-sm mb-8 space-y-2">
                {s.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="before:content-['•'] before:mr-2 before:text-[#4FD1C5]"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
