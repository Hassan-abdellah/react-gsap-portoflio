import { useRef } from "react";
import ContactForm from "@/Components/ContactForm.tsx";
import DealSvg from "@/Components/Icons/DealSvg.tsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const ContactSection = () => {
  const contactSectionRef = useRef(null);

  useGSAP(
    () => {
      // Shared scroll trigger config to avoid repetition
      const sharedTrigger = {
        trigger: contactSectionRef.current,
        start: "top 80%", // fires when section is 80% into viewport
        end: "center center",
        toggleActions: "play none none none",
      };

      // Animate SVG sliding in from the left
      gsap.from("#svg-container", {
        x: "-100%",
        opacity: 0,
        duration: 1.2, // ✅ was missing — now matches form duration
        ease: "elastic.inOut",
        scrollTrigger: sharedTrigger,
      });

      // Animate form sliding in from the right
      gsap.from("#form-container", {
        x: "100%",
        opacity: 0,
        duration: 1.2,
        ease: "elastic.inOut",
        scrollTrigger: sharedTrigger,
      });

      // Stagger form fields dropping in after containers settle
      gsap.fromTo(
        "form div div",
        { yPercent: -10, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          ease: "elastic.inOut",
          stagger: 0.25,
          delay: 1.2,
          scrollTrigger: {
            trigger: contactSectionRef.current,
            start: "-40px bottom", // slightly earlier than center — intentional
          },
        },
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
