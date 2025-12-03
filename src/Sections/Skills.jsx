import { skills } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";

const Skills = () => {
  const skillsContainer = useRef(null);

  useGSAP(
    () => {
      const split = SplitText.create("#subtitle", {
        type: "chars",
      });

      gsap.from(split.chars, {
        opacity: 0,
        y: 10,
        stagger: 0.05,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#subtitle",
          start: "5px bottom",
        },
      });
      gsap.fromTo(
        "#skills-container div",
        {
          xPercent: 10,
          opacity: 0,
        },
        {
          xPercent: 0,
          opacity: 1,
          ease: "elastic.inOut",
          stagger: 0.25,
          scrollTrigger: {
            trigger: "#skills-container",
            start: "40px bottom",
          },
        }
      );
    },
    { scope: skillsContainer }
  );

  return (
    <section id="skills" ref={skillsContainer} className="my-5">
      <h2 className="subtitle text-3xl mb-12" id="subtitle">
        Skills
      </h2>
      <div
        id="skills-container"
        className="px-4 grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4"
      >
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
