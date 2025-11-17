"use client";

import { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const launchConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully! 🎉");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
          launchConfetti();
        },
        () => {
          setStatus("Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-[#0f0f11] to-[#1a1a1d] text-white flex items-center justify-center py-20 px-6 relative"
    >
      {/* Radial Glow */}
      <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#4fd1c512] blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl font-extrabold mb-6">
            Let’s Build Something Great
          </h2>

          <p className="text-gray-400 mb-10 leading-relaxed text-lg">
            Whether you're planning a full-stack application, a Web3 system, or
            want to discuss an idea — I’d love to hear from you.
          </p>

          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-3 text-gray-300">
              <FaEnvelope className="text-[#4FD1C5]" />
              <a
                href="mailto:Rishabh.rthr001@gmail.com"
                className="hover:text-[#4FD1C5] transition"
              >
                Rishabh.rthr001@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <FaPhone className="text-[#4FD1C5]" />
              <a
                href="tel:+918447351776"
                className="hover:text-[#4FD1C5] transition"
              >
                +91 8447351776
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE – FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-[#151517]/60 backdrop-blur-xl border border-[#2a2a2d] rounded-3xl p-8 shadow-xl shadow-black/40"
        >
          <form onSubmit={sendEmail} className="flex flex-col gap-5">
            {/* NAME */}
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#0f0f11] border border-[#333] text-white focus:border-[#4FD1C5] transition"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#0f0f11] border border-[#333] text-white focus:border-[#4FD1C5] transition"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                rows="5"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#0f0f11] border border-[#333] text-white focus:border-[#4FD1C5] transition resize-none"
              ></textarea>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className={`mt-4 py-3 rounded-lg font-semibold transition ${
                loading
                  ? "bg-[#3bb1a6] cursor-not-allowed"
                  : "bg-[#4FD1C5] hover:bg-[#3bb1a6] text-black"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* STATUS + MESSAGE */}
            {status && (
              <>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-center mt-3 text-[#4FD1C5]"
                >
                  {status}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xs text-center mt-2 text-gray-500"
                >
                  I usually reply within a few hours. Looking forward to hearing
                  about your project!
                </motion.p>
              </>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
