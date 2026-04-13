import { Fragment, useRef, useState } from "react";
import Mackbook from "@/assets/mackbook-screen.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import clsx from "clsx";
import { projects, showcaseImgPositions } from "@/constants/index.ts";
import SelectedProjectDetails from "@/Components/ShowCase/SelectedProjectDetails.tsx";
import type { projectType } from "@/types/index.ts";
import BrowserToolbar from "@/Components/ShowCase/BrowserToolbar.tsx";
import { useMediaQuery } from "react-responsive";
import MackbookBackground from "@/Components/ShowCase/MackbookBackground.tsx";

const Showcase = () => {
  const showCaseRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  const [selectedProject, setSelectedProject] = useState<projectType | null>(
    null,
  );

  useGSAP(
    () => {
      const split = SplitText.create("#title", {
        type: "chars",
      });

      const tl = gsap.timeline({
        defaults: {
          ease: "power2.inOut",
          // duration: 1.2
        },
        scrollTrigger: {
          trigger: showCaseRef.current,
          start: "top 80%", // fires when section is 80% into viewport
          end: "center center",
          // toggleActions: "play none none reverse",
          toggleActions: "play none none none",
        },
      });

      tl.from(split.chars, {
        opacity: 0,
        y: 10,
        stagger: 0.05,
      });

      if (isMobile) {
        gsap.utils.toArray(".project").map((project, i) => {
          const el = project as Element;
          tl.fromTo(
            el.querySelector(".image-wrapper"),
            {
              y: 10,
              xPercent: -10,
              opacity: 0,
            },
            {
              y: 0,
              xPercent: 0,
              opacity: 1,
              stagger: 0.05,
              ease: "power3.inOut",
            },
          )
            .fromTo(
              el.querySelector("h3"),
              {
                opacity: 0,
                y: 10,
              },
              {
                opacity: 1,
                y: 0,
                stagger: 0.05,
                ease: "power3.out",
              },
            )
            .fromTo(
              el.querySelectorAll("a"),
              {
                opacity: 0,
                xPercent: -10,
              },
              {
                opacity: 1,
                xPercent: 0,
                stagger: 0.05,
                ease: "power3.out",
              },
            );
        });

        return;
      }
      tl.from("#macbook", {
        opacity: 0,
        y: 10,
      }).addLabel("images"); // ✅ marks the point after macbook finishes

      showcaseImgPositions.forEach((position) => {
        tl.fromTo(
          `.${position.id}`, // targets the class on the <img> inside each card
          position.from,
          position.to,
          "images",
        );
      });
    },
    { scope: showCaseRef, dependencies: [isMobile] },
  );

  // ✅ Fires every time selectedProject changes
  useGSAP(
    () => {
      if (!selectedProject || isMobile) return;

      // Kill any in-progress animation on #bg first
      gsap.killTweensOf("#bg");
      // Kill any in-progress animation on #project-details first

      gsap.killTweensOf("#project-details");

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.inOut",
        },
      });

      tl.fromTo(
        "#bg",
        {
          opacity: 1,
          clipPath: "polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%)", // collapsed at bottom-left
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // full rect
          duration: 0.6,
          ease: "power3.out",
        },
      )
        .fromTo(
          "#project-details h3",
          {
            opacity: 0,
            y: 10,
          },
          {
            opacity: 1,
            y: 0,
            ease: "power3.out",
          },
        )
        .fromTo(
          "#project-details a",
          {
            opacity: 0,
            xPercent: -10,
          },
          {
            opacity: 1,
            xPercent: 0,
            stagger: 0.05,
            ease: "power3.out",
          },
        );
    },
    { scope: showCaseRef, dependencies: [selectedProject, isMobile] },
  );

  const handleProjectClick = (image: projectType) => {
    // If clicking the same project, deselect and fade out
    if (selectedProject?.id === image.id) {
      gsap.to("#project-details h3", {
        opacity: 0,
        y: 10,
        ease: "power3.out",
      });
      gsap.to("#project-details a", {
        opacity: 0,
        xPercent: -10,
        stagger: 0.05,
        ease: "power3.out",
      });

      // Slide out — collapses back to bottom-left
      gsap.to("#bg", {
        clipPath: "polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%)",
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => setSelectedProject(null),
      });
    } else {
      setSelectedProject(image);
    }
  };

  return (
    <section id="gallery" ref={showCaseRef} className="my-20">
      <h2 id="title" className="text-center text-3xl mb-20 text-ghost-white">
        Gallery
      </h2>
      <div className="relative">
        {/* Labtop */}
        <img
          id="macbook"
          src={Mackbook}
          alt="mackbook-screen"
          className="mx-auto object-cover h-120 lg:block hidden"
        />
        {/* project List */}
        {/* for desktop */}
        <div className="lg:block hidden">
          {projects.map((image) => (
            <div
              key={image.id}
              className={clsx(
                image.id,
                "w-120 h-fit overflow-hidden absolute rounded-t-2xl cursor-pointer shadow-sm shadow-gray-100",
              )}
              onClick={() => handleProjectClick(image)}
            >
              {/* toolbar */}
              <BrowserToolbar />
              {/* image */}
              <img
                src={image.image}
                alt={image.name}
                className="w-full h-[calc(100%-16px)] object-cover"
              />
            </div>
          ))}
        </div>

        {/* project List */}
        {/* form Mobile */}
        <div className="lg:hidden flex flex-col items-center gap-4">
          {projects.map((image) => (
            <div className="project w-[calc(100%-30px)]" key={image.id}>
              <div
                className={clsx(
                  image.id,
                  "image-wrapper",
                  "h-64 w-full overflow-hidden rounded-t-2xl shadow-sm shadow-gray-100 mb-4",
                )}
              >
                {/* toolbar */}
                <BrowserToolbar />
                {/* image */}
                <img
                  src={image.image}
                  alt={image.name}
                  className="w-full h-full"
                />
              </div>
              <SelectedProjectDetails project={image} />
            </div>
          ))}
        </div>

        {/* background  */}
        {selectedProject ? (
          <MackbookBackground selectedProject={selectedProject} />
        ) : null}
      </div>

      {/* project details */}
      {selectedProject ? (
        <SelectedProjectDetails project={selectedProject} />
      ) : null}
    </section>
  );
};

export default Showcase;
