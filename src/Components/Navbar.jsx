import gsap from "gsap";
import { navbarLinks } from "../constants";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to("header", {
      marginLeft: "60px",
      marginRight: "60px",
      borderRadius: "50px",
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: "header",
        start: "350px top",
        scrub: 1,
      },
    });
  });
  return (
    <header className="bg-space-indigo shadow-2xl backdrop-blur-md text-ghost-white mx-2 mt-2 rounded-2xl transition-all duration-150 sticky top-2 left-0 right-0">
      <nav className="py-4 px-4 flex justify-between">
        {/* logo */}
        <div>HA</div>
        <ul className="flex items-center gap-6">
          {navbarLinks.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="relative text-lg hover:text-tropical-teal transition-colors duration-300 ease-in-out after:absolute after:w-full after:h-0.5 after:-bottom-1.5 after:left-0 after:right-0 after:bg-tropical-teal after:transition after:duration-300 after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:origin-bottom-right"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
