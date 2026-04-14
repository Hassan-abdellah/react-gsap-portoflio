import { useRef } from "react";
import ContactForm from "@/components/ContactForm.tsx";
import DealSvg from "@/components/Icons/DealSvg.tsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const ContactSection = () => {
  const contactSectionRef = useRef(null);

  useGSAP(
    () => {
      // Shared scroll trigger config to avoid repetition
      const makeTrigger = () => ({
        trigger: contactSectionRef.current,
        start: "top 80%", // fires when section is 80% into viewport
        end: "center center",
        toggleActions: "play none none none",
      });

      const tl = gsap.timeline({ scrollTrigger: makeTrigger() });
      // Animate SVG sliding in from the left
      tl.from(
        "#svg-container",
        {
          x: "-100%",
          opacity: 0,
          duration: 1.2,
          ease: "elastic.inOut",
        },
        0,
      )
        .from(
          // Animate form sliding in from the right
          "#form-container",
          {
            x: "100%",
            opacity: 0,
            duration: 1.2,
            ease: "elastic.inOut",
          },
          0,
        )
        .fromTo(
          // Stagger form fields dropping in after containers settle
          "form div div",
          { yPercent: -10, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            ease: "elastic.inOut",
            stagger: 0.25,
          },
          0.7,
        );
    },
    { scope: contactSectionRef },
  );

  return (
    <section
      id="contact"
      ref={contactSectionRef}
      className="mx-10 my-5 flex items-center justify-between flex-col lg:flex-row"
    >
      <div id="svg-container">
        <DealSvg />
      </div>

      <div id="form-container">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
