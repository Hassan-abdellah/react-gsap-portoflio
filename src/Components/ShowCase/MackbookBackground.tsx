import type { projectType } from "@/types/index.ts";

const MackbookBackground = ({
  selectedProject,
}: {
  selectedProject: projectType;
}) => {
  return (
    <>
      {/* Wrapper handles centering — GSAP never touches it */}
      <div className="lg:block hidden absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[320px] h-[210px]">
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
    </>
  );
};

export default MackbookBackground;
