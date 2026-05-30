import type { useAnimation } from "motion/react";

export interface projectType {
  id: string;
  name: string;
  image: string;
  githubURL: string;
  websiteURL: string;
}

export interface AnimatedIconProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
  /** Pass controls from the parent to drive the animation externally */
  controls?: ReturnType<typeof useAnimation>;
}
