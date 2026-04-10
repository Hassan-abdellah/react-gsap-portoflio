import gsap from "gsap";
import Hero from "./Sections/Hero";
import Skills from "./Sections/Skills";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Footer from "./Components/Footer";
import ContactSection from "./Sections/ContactSection";
import Showcase from "./Sections/Showcase";
import Navbar from "./Components/Navbar";

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
    </main>
  );
};

export default App;
