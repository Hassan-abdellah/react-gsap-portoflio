import type { AnimatedIconProps } from "@/types/index.ts";
import type { Transition } from "motion/react";
import { motion, useAnimation } from "motion/react";

const transitions: Transition = {
  duration: 0.3,
  opacity: { delay: 0.15 },
};

const RightUpArrowIcon = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "currentColor",
  controls: externalControls,
  ...props
}: AnimatedIconProps) => {
  const internalControls = useAnimation();
  const controls = externalControls ?? internalControls;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <motion.path
        variants={{
          normal: { translateY: "0%", translateX: "0%" },
          animate: { translateY: "-2px", translateX: "2px" },
        }}
        transition={transitions}
        animate={controls}
        initial="normal"
        d="M7 7h10v10"
      />
      <path d="M7 17 17 7" />
    </svg>
  );
};

export default RightUpArrowIcon;
