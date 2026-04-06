import ContactForm from "@/Components/ContactForm";
import DealSvg from "@/Components/DealSvg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const ContactSection = () => {
  const contactSectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from("#svg-container", {
        x: "-100%",
        opacity: 0,
        ease: "elastic.inOut",
        scrollTrigger: {
          trigger: "#contact",
          start: "-50px center",
        },
      });
      gsap.from("#form-container", {
        x: "100%",
        opacity: 0,
        ease: "elastic.inOut",
        duration: 1.2,
        scrollTrigger: {
          trigger: "#contact",

          start: "-50px center",
        },
      });

      gsap.fromTo(
        "form div div",
        {
          yPercent: -10,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          ease: "elastic.inOut",
          stagger: 0.25,
          delay: 1.2,
          scrollTrigger: {
            trigger: "#contact",
            start: "-40px bottom",
          },
        },
      );
    },
    { scope: contactSectionRef },
  );

  return (
    <section
      id="contact"
      className="mx-4 my-5 flex items-center justify-between lg:flex-row flex-col"
      ref={contactSectionRef}
    >
      {/* left side */}
      <div id="svg-container">
        <DealSvg />
      </div>

      {/* Right side */}
      <div id="form-container">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
