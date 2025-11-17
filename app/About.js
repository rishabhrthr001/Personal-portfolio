"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiSolidity,
  SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#0f0f11] text-white py-20 px-6 flex items-center justify-center overflow-hidden"
    >
      {/* ✅ SAME CENTER TEAL GLOW */}
      <div
        className="absolute top-40 left-1/2 -translate-x-1/2
                   w-[700px] h-[700px]
                   bg-[#4fd1c525]
                   blur-[160px] rounded-full pointer-events-none"
      ></div>

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT: About Text */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6">About Me</h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            I’m{" "}
            <span className="text-[#4FD1C5] font-semibold">
              Rishabh Rathore
            </span>{" "}
            — or you can call me{" "}
            <span className="text-[#7F5AF0] font-semibold">Golu</span>. I’m a{" "}
            <span className="font-semibold text-[#4FD1C5]">
              Full-Stack & Web3 Developer
            </span>{" "}
            who builds fast, clean, and modern digital products.
          </p>

          <p className="text-gray-400 mb-6 leading-relaxed">
            I specialize in{" "}
            <span className="font-semibold text-gray-200">
              Next.js, MERN, Node.js
            </span>
            , and create everything from full-stack apps and dashboards to
            mobile apps and high-performance APIs.
          </p>

          <p className="text-gray-400 mb-6 leading-relaxed">
            On the Web3 side, I develop{" "}
            <span className="font-semibold text-gray-200">
              secure smart contracts
            </span>
            , build reward systems, ERC-20/721 tokens, and experiment with{" "}
            <span className="font-semibold text-gray-200">
              cross-chain features
            </span>
            .
          </p>

          <p className="text-gray-400 mb-8 leading-relaxed">
            I’ve completed my BCA & MCA and now focus on building products that
            are visually polished and technically strong.
          </p>

          {/* SKILL ICON ROW */}
          <div className="flex flex-wrap gap-4 mb-10">
            <FaReact size={36} className="text-[#61DAFB]" />
            <SiNextdotjs size={36} className="text-white" />
            <FaNodeJs size={36} className="text-green-400" />
            <SiMongodb size={36} className="text-green-500" />
            <SiSolidity size={36} className="text-blue-400" />
            <SiTailwindcss size={36} className="text-teal-300" />
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/rishabhrthr001"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-[#333] rounded-lg hover:border-[#4FD1C5] hover:text-[#4FD1C5] transition"
            >
              <FaGithub size={22} />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/rishabh-rathore-115478228"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-[#333] rounded-lg hover:border-[#4FD1C5] hover:text-[#4FD1C5] transition"
            >
              <FaLinkedin size={22} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* RIGHT: Animated Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-64 h-64 rounded-full overflow-hidden border-2 border-[#4FD1C5] shadow-lg shadow-black/40"
          >
            <Image
              src="/golu.jpg"
              alt="Rishabh Rathore"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
