import gsap from "gsap";
import Hero from "./Sections/Hero.js";
import Skills from "./Sections/Skills.jsx";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import ContactSection from "./Sections/ContactSection.js";
import Showcase from "./Sections/Showcase.js";
import Navbar from "./Components/Navbar.js";
import { Toaster } from "@/components/ui/sonner";
import Footer from "./Components/Footer.jsx";
gsap.registerPlugin(SplitText, ScrollTrigger);

const App = () => {
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });

  // Listen for the scroll event and log the event data
  lenis.on("scroll", (e) => {
    // console.log(e);
  });

  return (
    <main>
      <Navbar />
      <Hero />
      <Skills />
      <Showcase />
      <ContactSection />
      <Footer />

      <Toaster />
    </main>
  );
};

export default App;
