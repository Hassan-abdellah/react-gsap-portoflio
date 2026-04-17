export const navbarLinks = [
  {
    label: "About",
    id: "about",
  },
  {
    label: "Skills",
    id: "skills",
  },
  {
    label: "Gallery",
    id: "gallery",
  },
];

export const skills = [
  {
    title: "React JS",
    icon: "/images/skills/reactjs.svg",
  },
  {
    title: "Next JS",
    icon: "/images/skills/nextjs.svg",
  },
  {
    title: "Typescript",
    icon: "/images/skills/typescript.svg",
  },
  {
    title: "Tailwind CSS",
    icon: "/images/skills/tailwindcss.svg",
  },
  {
    title: "Shadcn",
    icon: "/images/skills/shadcn.svg",
  },
  {
    title: "Bootstrap",
    icon: "/images/skills/bootstrap.svg",
  },
  {
    title: "Ant Design",
    icon: "/images/skills/antdesign.svg",
  },
  {
    title: "Chakra UI",
    icon: "/images/skills/chakraui.svg",
  },
];

export const socialLinks = [
  {
    name: "Github",
    icon: "/images/links/github-svg.svg",
    href: "https://github.com",
  },
  {
    name: "LinkedIn",
    icon: "/images/links/linkedin-svg.svg",
    href: "https://linkedin.com",
  },
];

export const projects = [
  {
    id: "p1",
    name: "Expense Tracker",
    image: "/images/projects/expense-tracker.jpg",
    githubURL: "https://github.com/Hassan-abdellah/expenses-tracker",
    websiteURL: "https://ex-trackers.netlify.app",
  },
  {
    id: "p2",
    name: "Expense Tracker",
    image: "/images/projects/expense-tracker.jpg",
    githubURL: "https://github.com/Hassan-abdellah",
    websiteURL: "https://github.com/Hassan-abdellah",
  },
  {
    id: "p3",
    name: "Coffee & Desserts Store",
    image: "/images/projects/coffee-store.jpg",
    githubURL: "https://github.com/Hassan-abdellah/dessert-coffee-store",
    websiteURL: "https://coffee-desserts.netlify.app",
  },
  {
    id: "p4",
    name: "Browser Extensions Manager",
    image: "/images/projects/browser-extensions.jpg",
    githubURL: "https://github.com/Hassan-abdellah/browser-extensions-manager",
    websiteURL: "https://browser-extensions-mnger.netlify.app",
  },
];

export const showcaseImgPositions = [
  {
    id: "p1",
    from: { left: "-20%", top: "-20%", opacity: 0 }, // off-screen top-left
    to: { left: "3%", top: "-5%", opacity: 1 },
  },
  {
    id: "p2",
    from: { right: "-20%", top: "-20%", opacity: 0 }, // off-screen top-right
    to: { right: "3%", top: "-5%", opacity: 1 },
  },
  {
    id: "p3",
    from: { left: "-20%", bottom: "-20%", opacity: 0 }, // off-screen bottom-left
    to: { left: "3%", bottom: "-5%", opacity: 1 },
  },
  {
    id: "p4",
    from: { right: "-20%", bottom: "-20%", opacity: 0 }, // off-screen bottom-right
    to: { right: "3%", bottom: "-5%", opacity: 1 },
  },
];

export const stacks = [
  {
    name: "Front-End",
    techs: ["React Js", "Typescript"],
  },
  {
    name: "Styling",
    techs: ["Shadcn", "Tailwind CSS"],
  },
  {
    name: "Back-End",
    techs: ["Supabase", "Clerk"],
  },
];
