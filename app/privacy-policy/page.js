"use client";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <section className="relative min-h-screen bg-[#0f0f11] text-gray-300 py-24 px-6 overflow-hidden">
      {/* Teal Glow */}
      <div
        className="absolute top-40 left-1/2 -translate-x-1/2 
        w-[800px] h-[800px] bg-[#4fd1c525] blur-[200px] rounded-full pointer-events-none"
      ></div>

      <div className="relative max-w-4xl mx-auto z-10">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-white mb-10 text-center"
        >
          Privacy Policy
        </motion.h1>

        {/* Card container */}
        <div className="bg-[#151517] border border-[#242427] rounded-3xl p-10 shadow-xl shadow-black/40 backdrop-blur-lg">
          <p className="mb-6 leading-relaxed text-lg">
            Welcome to{" "}
            <span className="text-[#4FD1C5] font-semibold">Rishabh Labs</span>.
            Your privacy matters to us. This policy explains how we collect,
            use, and protect your information.
          </p>

          <Section title="1. Information We Collect">
            <p>
              We may collect basic personal information such as your name,
              email, and any data you submit through contact forms.
            </p>
          </Section>

          <Section title="2. How We Use Your Information">
            <ul className="list-disc ml-6 space-y-2">
              <li>To respond to your inquiries</li>
              <li>To improve the quality of our services</li>
              <li>To provide updates and notifications when needed</li>
            </ul>
          </Section>

          <Section title="3. Cookies & Tracking">
            <p>
              Our website may use cookies for performance, analytics, and
              functionality enhancements.
            </p>
          </Section>

          <Section title="4. Data Protection">
            <p>
              We implement reasonable security measures to prevent unauthorized
              access to your data.
            </p>
          </Section>

          <Section title="5. Third-Party Tools">
            <p>
              We may use analytics or email services provided by trusted third
              parties. Their policies apply to those tools.
            </p>
          </Section>

          <Section title="6. Policy Updates">
            <p>
              We may revise this policy periodically. Updated versions will
              appear on this page.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              For privacy-related questions, email us at:
              <br />
              <span className="text-[#4FD1C5] font-semibold">
                rishabh.rthr001@gmail.com
              </span>
            </p>
          </Section>
        </div>
      </div>
    </section>
  );
}

function Section({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-10"
    >
      <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>
      <div className="text-gray-400 text-[15px] leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}
