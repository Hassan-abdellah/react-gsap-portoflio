import gsap from "gsap";
import Navbar from "./Components/Navbar";
import Hero from "./Sections/Hero";
import Skills from "./Sections/Skills";
import { SplitText } from "gsap/SplitText";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(SplitText, ScrollSmoother);

// create the scrollSmoother before your scrollTriggers
ScrollSmoother.create({
  smooth: 1.5, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
  normalizeScroll: true, // prevents weird iOS/overscroll bounce effects
});

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Skills />
    </main>
  );
};

export default App;
