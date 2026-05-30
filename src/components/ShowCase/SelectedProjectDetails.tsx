import clsx from "clsx";
import type { projectType } from "../../types/index.js";
import AnimatedIconLink from "../common/AnimatedIconLink.tsx";
import GithubSVG from "../Icons/GithubSVG.js";
import GlobeSVG from "../Icons/GlobeSVG.js";

const SelectedProjectDetails = ({ project }: { project: projectType }) => {
  return (
    <div id="project-details">
      <h3 className="text-tropical-teal text-center text-2xl mb-1">
        {project.name}
      </h3>

      <div className="flex items-center justify-center gap-1">
        <AnimatedIconLink
          IconComponent={GlobeSVG}
          href={project.websiteURL}
          aria-label="preview Website"
          target="_blank"
          className="group text-ghost-white w-10 h-10 rounded-full flex items-center justify-center border-2 border-ghost-white hover:bg-ghost-white hover:text-tropical-teal transition-colors duration-300"
          iconwidth={20}
          iconheight={20}
          iconstrokeWidth={1.8}
        />

        <AnimatedIconLink
          IconComponent={GithubSVG}
          href={project.githubURL}
          aria-label="View Github Repository"
          target="_blank"
          className="group text-ghost-white w-10 h-10 rounded-full flex items-center justify-center border-2 border-ghost-white hover:bg-ghost-white hover:text-tropical-teal transition-colors duration-300"
          iconwidth={22}
          iconheight={22}
          iconstrokeWidth={1.8}
        />
      </div>
    </div>
  );
};

export default SelectedProjectDetails;
