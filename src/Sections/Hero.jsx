import { useGSAP } from "@gsap/react";
import HeroImg from "../assets/hero-img.png";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import ScrollDownSvg from "../Components/ScrollDownSvg";
import FileDownloadSvg from "../Components/FileDownloadSvg";
import { useRef } from "react";
const Hero = () => {
  const aboutContainer = useRef(null);
  // Download CSV button hover animation
  const handleDownloadButtonHover = () => {
    const tl = gsap.timeline();
    tl.to("#csv-button", {
      scale: 1.05,
      duration: 0.2,
    })
      .from(
        "#csv-button span",
        {
          y: 5,
          opacity: 0,
          duration: 0.2,
        },
        "-=0.1",
      )
      .from(
        "#csv-button svg",
        {
          y: -5,
          opacity: 0,
          duration: 0.2,
        },
        "-=0.1",
      );
  };
  // contact Me button hover animation
  const handleContactButtonHover = () => {
    gsap.to("#contact-button", {
      xPercent: 4,
      yPercent: 4,
      duration: 0.2,
      ease: "elastic.in",
    });
  };
  // contact Me button hover animation
  const handleContactButtonHoverExit = () => {
    gsap.to("#contact-button", {
      xPercent: 0,
      yPercent: 0,
      duration: 0.2,
      ease: "elastic.out",
    });
  };

  useGSAP(
    () => {
      const tl = gsap.timeline();
      const tl2 = gsap.timeline();
      const tl3 = gsap.timeline();
      const tl4 = gsap.timeline();

      const split = SplitText.create("li", {
        type: "chars",
      });
      const split2 = SplitText.create("#name", {
        type: "chars",
      });

      // image animation
      gsap.fromTo(
        "#img-container",
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          duration: 1.5,
          ease: "power2.outIn",
        },
      );
      gsap.from("#img-container img", {
        scale: 1.5,
        opacity: 0,
        duration: 1,
        delay: 1.5,
        ease: "power2.outIn",
      });

      tl.from(split2.chars, {
        opacity: 0,
        y: 10,
        stagger: 0.05,
        ease: "power2.inOut",
      }).from(split.chars, {
        opacity: 0,
        y: 10,
        stagger: 0.08,
        ease: "power2.inOut",
      });

      // timeline 2 of left side bottom
      tl2
        .from("#paragraph1", {
          opacity: 0,
          y: 10,
          ease: "power2.inOut",
        })
        .from("#contact-button", {
          opacity: 0,
          y: -10,
          scale: 0.8,
          ease: "elastic.inOut",
        });

      // timeline 3 of right side top
      tl3
        .from("#paragraph2", {
          opacity: 0,
          y: 10,
          ease: "power2.inOut",
        })
        .from("#csv-button", {
          opacity: 0,
          y: -10,
          ease: "elastic.inOut",
        });

      // timeline 4 of right side bottom

      tl4
        .from("#paragraph3", {
          opacity: 0,
          y: 10,
          ease: "power2.inOut",
        })
        .from("#scrolldownSvg", {
          opacity: 0,
          y: -10,
          ease: "elastic.inOut",
        });
    },
    { scope: aboutContainer },
  );
  return (
    <section
      id="about"
      ref={aboutContainer}
      className="my-10 mx-6 flex xl:flex-row xl:gap-0 gap-10 flex-col"
    >
      {/* left side */}
      <div className="flex xl:flex-col lg:flex-row flex-col lg:justify-between xl:gap-0 gap-10 pt-20 pr-10 flex-1">
        {/* Top Left Section */}
        <div>
          <h1 className="text-tropical-teal text-4xl mb-4" id="name">
            Hassan Abdellah
          </h1>
          <ul>
            {["Web Devloper", "Web Designer", "UI / UX"].map((item, index) => (
              <li key={index} className="text-ghost-white">
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Bottom Left Section */}
        <div>
          <p
            className="text-ghost-white text-xl mb-4 leading-8"
            id="paragraph1"
          >
            Turning great ideas into stunning full of life digital experiences.{" "}
            <br />
            Have an Idea in your mind?
          </p>
          <button
            type="button"
            aria-label="Contact Me"
            id="contact-button"
            className="bg-tropical-teal text-ghost-white cursor-pointer px-4 py-2 rounded-lg overflow-hidden relative"
            onMouseEnter={handleContactButtonHover}
            onMouseLeave={handleContactButtonHoverExit}
          >
            Contact Me
          </button>
        </div>
      </div>
      {/* hero image */}
      <div
        id="img-container"
        className="bg-[#3a506b]/10 lg:w-200 w-[calc(100%-5px)] h-150 rounded-xl xl:mx-0 mx-auto"
      >
        <img src={HeroImg} alt="Me" className="w-full h-full object-cover" />
      </div>

      {/* right side */}
      <div className="flex xl:flex-col lg:flex-row flex-col lg:justify-between xl:gap-0 gap-10 pt-20 xl:pl-10 pl-0 flex-1">
        {/* Top Right Section */}
        <div>
          <p
            className="text-ghost-white text-xl mb-4 leading-8"
            id="paragraph2"
          >
            A passionate developer who loves to create beautiful and functional
            websites. <br />
            Want more information?
          </p>
          <button
            type="button"
            aria-label="Download CSV"
            id="csv-button"
            className="relative overflow-hidden group flex items-center gap-2 bg-transparent text-tropical-teal border-2 border-tropical-teal cursor-pointer px-4 py-2 rounded-3xl  hover:text-ghost-white transition-colors duration-300 after:rounded-3xl after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:w-full after:h-ful after:bg-tropical-teal after:transition after:duration-300 after:scale-y-0 hover:after:scale-y-100 hover:after:origin-bottom after:origin-top after:-z-10 after:border-4 after:border-tropical-teal"
            onMouseEnter={handleDownloadButtonHover}
          >
            <span>Donwload CSV</span>
            <FileDownloadSvg className="stroke-tropical-teal group-hover:stroke-ghost-white transition-colors duration-300" />
          </button>
        </div>
        {/* bottom right section */}
        <div>
          <p
            className="text-ghost-white text-xl mb-4 leading-8"
            id="paragraph3"
          >
            Fasten your belt, and Let's take a tour through some of my best
            Works.
          </p>
          <ScrollDownSvg />
        </div>
      </div>
    </section>
  );
};

export default Hero;
