"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaCubes,
  FaMobileAlt,
  FaServer,
  FaGlobe,
  FaRobot,
} from "react-icons/fa";

export default function Pricing() {
  const plans = [
    {
      title: "Frontend Website",
      icon: <FaGlobe size={38} className="text-[#4FD1C5]" />,
      price: "Starting at ₹7,000",
      desc: "Modern, responsive and fast frontend websites built using React / Next.js with clean UI/UX.",
      features: [
        "Landing Pages",
        "Business Websites",
        "Portfolio & UI Designs",
        "Animations & Transitions",
        "SEO Ready",
      ],
    },
    {
      title: "Full-Stack Web App",
      icon: <FaCode size={38} className="text-[#7F5AF0]" />,
      price: "Starting at ₹15,000",
      desc: "Complete full-stack applications with databases, APIs, dashboards and authentication.",
      features: [
        "Next.js / MERN Stack",
        "Admin Dashboards",
        "Authentication Systems",
        "API Integrations",
        "Optimized Performance",
      ],
    },
    {
      title: "Mobile Apps",
      icon: <FaMobileAlt size={38} className="text-yellow-400" />,
      price: "Starting at ₹25,000",
      desc: "Cross-platform mobile applications built with React Native or Expo for Android & iOS.",
      features: [
        "Cross-Platform Support",
        "API Integration",
        "Push Notifications",
        "Smooth UI/UX",
        "Offline Support",
      ],
    },
    {
      title: "Web3 + Smart Contracts",
      icon: <FaCubes size={38} className="text-blue-400" />,
      price: "Starting at ₹6,000",
      desc: "Secure & gas-optimized Web3 systems built using Solidity with modern UI integration.",
      features: [
        "ERC20 / ERC721 / ERC1155",
        "Reward Systems",
        "Smart Contract Deployment",
        "Cross-Chain Features",
        "DApp Integration",
      ],
    },
    {
      title: "Backend APIs",
      icon: <FaServer size={38} className="text-lime-400" />,
      price: "Starting at ₹10,000",
      desc: "Robust backend systems built with Node.js for web apps, mobile apps and blockchain services.",
      features: [
        "REST / GraphQL APIs",
        "Auth Systems",
        "Secure Endpoints",
        "High-Performance Setup",
        "Optimized Architecture",
      ],
    },
    {
      title: "AI Bots & Automation",
      icon: <FaRobot size={38} className="text-pink-400" />,
      price: "Starting at ₹8,000",
      desc: "Custom AI agents and automation bots that boost productivity and reduce manual work.",
      features: [
        "AI Chatbots (website / WhatsApp)",
        "Automation Bots",
        "Lead Generation Bots",
        "AI Email Responders",
        "Custom Workflow Automation",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="relative min-h-screen text-white py-24 px-6 overflow-hidden bg-[#0f0f11]"
    >
      {/* ✅ EXACT SAME CENTER TEAL GLOW AS HERO */}
      <div
        className="absolute top-40 left-1/2 -translate-x-1/2 
                   w-[800px] h-[800px] 
                   bg-[#4fd1c526] 
                   blur-[180px] rounded-full pointer-events-none"
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-6 tracking-tight">Pricing</h2>
        <p className="text-gray-300 mb-16 text-lg">
          Transparent starting prices so you know what to expect — final cost
          depends on project scope.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#151517] border border-[#242427] rounded-3xl p-8 w-full max-w-sm shadow-xl shadow-black/40 hover:scale-105 transition-all"
            >
              <div className="mb-4 flex justify-center">{p.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
              <p className="text-[#4FD1C5] font-bold text-xl mb-4">{p.price}</p>
              <p className="text-gray-400 mb-6">{p.desc}</p>

              <ul className="text-gray-500 text-sm space-y-2 mb-8">
                {p.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="before:content-['•'] before:mr-2 before:text-[#4FD1C5]"
                  >
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="block w-full px-6 py-3 rounded-xl bg-gradient-to-r from-[#7F5AF0] to-[#4FD1C5] text-black font-semibold hover:scale-[1.03] transition"
              >
                Get Quote
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
