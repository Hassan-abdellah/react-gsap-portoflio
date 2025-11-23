import { skills } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const Skills = () => {
  // useGSAP(() => {
  //   gsap.from("#skills div div", {
  //     y: 10,
  //     opacity: 0,
  //     ease: "elastic.inOut",
  //     stagger: 0.05,
  //     scrollTrigger: {
  //       trigger: "#skills",
  //       start: "top 10px",
  //       scrub: 1,
  //     },
  //   });
  // });

  return (
    <section id="skills" className="my-5">
      <h2 className="subtitle text-3xl mb-12" id="subtitle">
        Skills
      </h2>
      <div className="px-4 grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4">
        {skills.map(({ title, icon }) => (
          <div
            key={title}
            className="flex flex-col items-center gap-4 bg-[#3a506b]/20 py-6 rounded-xl transition-transform duration-150 ease-in-out hover:rotate-y-12"
          >
            <h4 className="subtitle text-xl">{title}</h4>
            <img src={icon} alt={title} className="w-20 h-20" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
