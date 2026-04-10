import React, { useRef, useState } from "react";
import Mackbook from "@/assets/mackbook-screen.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { showcaseImgPositions, projects } from "@/constants";
import clsx from "clsx";
import SelectedProjectDetails from "@/Components/ShowCase/SelectedProjectDetails";

const Showcase = () => {
  const showCaseRef = useRef(null);

  const [selectedProject, setSelectedProject] = useState(null);

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
          toggleActions: "play none none reverse",
        },
      });

      tl.from(split.chars, {
        opacity: 0,
        y: 10,
        stagger: 0.05,
      })
        .from("#macbook", {
          opacity: 0,
          y: 10,
        })
        .addLabel("images"); // ✅ marks the point after macbook finishes

      showcaseImgPositions.forEach((position) => {
        tl.fromTo(
          `.${position.id}`, // targets the class on the <img> inside each card
          position.from,
          position.to,
          "#images",
        );
      });
    },
    { scope: showCaseRef },
  );

  // ✅ Fires every time selectedProject changes
  useGSAP(
    () => {
      if (!selectedProject) return;

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
    { scope: showCaseRef, dependencies: [selectedProject] },
  );

  const handleProjectClick = (image) => {
    // If clicking the same project, deselect and fade out
    if (selectedProject?.id === image.id) {
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
          className="mx-auto object-cover h-120"
        />

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
            <div className="bg-[#F3F2F2] rounded-t-2xl h-4 pl-3 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="w-2 h-2 rounded-full bg-white" />
            </div>
            {/* image */}
            <img
              src={image.image}
              alt={image.name}
              className="w-full h-[calc(100%-16px)] object-cover"
            />
          </div>
        ))}
        {/* background  */}

        {/* Wrapper handles centering — GSAP never touches it */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[320px] h-[210px]">
          {/* GSAP animates only this inner div */}
          <div
            id="bg"
            className="w-full h-full bg-cover bg-center opacity-0"
            style={{
              backgroundImage: selectedProject
                ? `url(${selectedProject.image})`
                : "none",
            }}
          />
        </div>
      </div>

      {/* project details */}
      {selectedProject ? (
        <SelectedProjectDetails project={selectedProject} />
      ) : null}
    </section>
  );
};

export default Showcase;
