import Hero from "./Hero";
import Navbar from "./Navbar";
import Services from "./Services";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Pricing from "./Pricing";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D0E12] to-[#11131A] text-white">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}
