"use client";
import { motion } from "framer-motion";

export default function TermsConditions() {
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
          Terms & Conditions
        </motion.h1>

        {/* Card container */}
        <div className="bg-[#151517] border border-[#242427] rounded-3xl p-10 shadow-xl shadow-black/40 backdrop-blur-lg">
          <p className="mb-6 leading-relaxed text-lg">
            These Terms govern your use of{" "}
            <span className="text-[#4FD1C5] font-semibold">Rishabh Labs</span>.
            By accessing this website, you agree to follow these guidelines.
          </p>

          <Section title="1. Usage of Website">
            <p>
              You agree to use the site lawfully and responsibly. Any harmful
              activity may result in restricted access.
            </p>
          </Section>

          <Section title="2. Intellectual Property">
            <p>
              All branding, content, and visuals belong to Rishabh Labs unless
              specified. Unauthorized use is prohibited.
            </p>
          </Section>

          <Section title="3. Services">
            <p>
              Any agreed-upon services or deliverables follow the terms
              established between both parties.
            </p>
          </Section>

          <Section title="4. Liability">
            <p>
              We are not responsible for losses arising from use of the website
              or third-party integrations.
            </p>
          </Section>

          <Section title="5. External Links">
            <p>
              We may link to external sites. Their content and policies are
              their responsibility, not ours.
            </p>
          </Section>

          <Section title="6. Updates to Terms">
            <p>
              We may revise these terms. Continued use of the website means you
              accept the updated version.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              For legal or support questions:
              <br />
              <span className="text-[#4FD1C5] font-semibold">
                rishabhrthr001@gmail.com
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
