import gsap from "gsap";
import Navbar from "./components/Navbar.tsx";
import Hero from "./Sections/Hero.tsx";
import Skills from "./Sections/Skills.tsx";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Footer from "./components/Footer.tsx";
import ContactSection from "./Sections/ContactSection.tsx";
import Showcase from "./Sections/Showcase.tsx";
import { Toaster } from "./components/ui/sonner.tsx";

gsap.registerPlugin(SplitText, ScrollTrigger);

const App = () => {
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });

  // Listen for the scroll event and log the event data
  lenis.on("scroll", (e) => {
    console.log(e);
  });

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Skills />
        <Showcase />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </>
  );
};

export default App;
