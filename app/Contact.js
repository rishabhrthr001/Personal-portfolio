"use client";

import { useState } from "react";
import { FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

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
      particleCount: 150,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#4FD1C5', '#7F5AF0', '#ffffff']
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
          setStatus("SUCCESS");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
          launchConfetti();
        },
        () => {
          setStatus("ERROR");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden bg-transparent">
      {/* Seamless Transition Decor */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#4fd1c503] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4fd1c502] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT: TEXT & INFO */}
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#4FD1C5] font-mono text-xs tracking-[0.3em] uppercase mb-6 block"
            >
              Contact Me
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-10"
            >
              Let's build <br />
              <span className="text-white/20">something</span> <br />
              Extraordinary.
            </motion.h2>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#4FD1C5] group-hover:bg-[#4FD1C5] group-hover:text-black transition-all">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-mono uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:Rishabh.rthr001@gmail.com" className="text-white text-lg font-bold hover:text-[#4FD1C5] transition-colors line-clamp-1">
                    Rishabh.rthr001@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#4FD1C5] group-hover:bg-[#4FD1C5] group-hover:text-black transition-all">
                  <FaPhone size={20} />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-mono uppercase tracking-widest mb-1">Phone</p>
                  <a href="tel:+918447351776" className="text-white text-lg font-bold hover:text-[#4FD1C5] transition-colors">
                    +91 8447351776
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#4FD1C5]/10 to-[#7F5AF0]/10 blur-3xl opacity-30 rounded-[3rem]" />
            <div className="relative p-10 md:p-12 rounded-[3.5rem] bg-[#121214]/60 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden">
              
              <form onSubmit={sendEmail} className="space-y-6">
                <div className="relative group">
                   <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#4FD1C5] transition-colors" />
                   <input
                     type="text"
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                     placeholder="Your Name"
                     required
                     className="w-full pl-12 pr-6 py-5 rounded-2xl bg-black/40 border border-white/5 text-white focus:outline-none focus:border-[#4FD1C5] transition-all"
                   />
                </div>

                <div className="relative group">
                   <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#4FD1C5] transition-colors" />
                   <input
                     type="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     placeholder="Email Address"
                     required
                     className="w-full pl-12 pr-6 py-5 rounded-2xl bg-black/40 border border-white/5 text-white focus:outline-none focus:border-[#4FD1C5] transition-all"
                   />
                </div>

                <div className="relative group">
                   <FiMessageSquare className="absolute left-4 top-6 text-white/20 group-focus-within:text-[#4FD1C5] transition-colors" />
                   <textarea
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                     placeholder="What's your project about?"
                     rows="5"
                     required
                     className="w-full pl-12 pr-6 py-5 rounded-2xl bg-black/40 border border-white/5 text-white focus:outline-none focus:border-[#4FD1C5] transition-all resize-none"
                   />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-5 rounded-2xl font-black text-black uppercase tracking-widest transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3
                    ${loading ? "bg-white/10 text-white cursor-not-allowed" : "bg-[#4FD1C5] hover:bg-[#3bb1a6] hover:shadow-[#4FD1C5]/20"}`}
                >
                  {loading ? "Sending Protocol..." : <>Send Message <FiSend size={18} /></>}
                </button>
              </form>

              {/* SUCCESS MESSAGE OVERLAY */}
              <AnimatePresence>
                {status === "SUCCESS" && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-[#050507] flex flex-col items-center justify-center text-center p-12 z-20"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#4FD1C5]/20 flex items-center justify-center text-[#4FD1C5] mb-6 border border-[#4FD1C5]/40 animate-bounce">
                      <FiCheckCircle size={40} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">Message Received!</h3>
                    <p className="text-white/40 mb-8 max-w-xs">The protocol has been initiated. I'll reach out to you shortly.</p>
                    <button 
                      onClick={() => setStatus("")}
                      className="px-8 py-3 rounded-xl bg-white/5 text-white border border-white/10 font-bold hover:bg-white/10 transition-all"
                    >
                      Send Another
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
