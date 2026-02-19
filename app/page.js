import Hero from "./Hero";
import Navbar from "./Navbar";
import Expertise from "./Expertise";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050507] text-white selection:bg-[#4FD1C5]/30 selection:text-[#4FD1C5] overflow-x-hidden">
      {/* 🌌 GLOBAL AMBIENT SYSTEM */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#4FD1C5]/[0.03] blur-[120px] rounded-full" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-[#7F5AF0]/[0.03] blur-[120px] rounded-full" />
        <div className="absolute top-[70%] -left-[10%] w-[40%] h-[40%] bg-[#4FD1C5]/[0.03] blur-[120px] rounded-full" />
        
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Expertise />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
