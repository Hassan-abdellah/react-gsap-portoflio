import type { projectType } from "../../types/index.js";
import GithubSVG from "../Icons/GithubSVG.js";
import GlobeSVG from "../Icons/GlobeSVG.js";

const SelectedProjectDetails = ({ project }: { project: projectType }) => {
  return (
    <div id="project-details">
      <h3 className="text-tropical-teal text-center text-2xl mb-1">
        {project.name}
      </h3>

      <div className="flex items-center justify-center gap-1">
        <a
          href={project.websiteURL}
          target="_blank"
          className="group text-ghost-white w-10 h-10 rounded-full flex items-center justify-center border-2 border-ghost-white hover:bg-ghost-white transition-colors duration-300"
        >
          <GlobeSVG
            classNames="w-5 h-5"
            pathClassNames="group-hover:stroke-tropical-teal stroke-ghost-white transition-colors duration-300"
          />
        </a>
        <a
          href={project.githubURL}
          target="_blank"
          className="group text-ghost-white w-10 h-10 rounded-full flex items-center justify-center border-2 border-ghost-white hover:bg-ghost-white transition-colors duration-300"
        >
          <GithubSVG classNames="stroke-ghost-white fill-ghost-white w-5 h-5 group-hover:stroke-tropical-teal group-hover:fill-tropical-teal transition-colors duration-300" />
        </a>
      </div>
    </div>
  );
};

export default SelectedProjectDetails;
