import { Fragment, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button.tsx";
import { Sheet, SheetContent } from "./ui/sheet.tsx";
import { navbarLinks } from "@/constants/index.ts";

const MobileNavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <Button
        variant="outline"
        className="bg-transparent border border-none m-0 p-0 text-ghost-white block sm:hidden"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="size-6" />
      </Button>
      {isOpen && (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent className="bg-tropical-teal text-twilight-indigo border-none flex items-center justify-center">
            <ul className="flex flex-col gap-3">
              {navbarLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="relative text-twilight-indigo text-lg hover:text-tropical-teal transition-colors duration-300 ease-in-out after:absolute after:w-full after:h-0.5 after:-bottom-1.5 after:left-0 after:right-0 after:bg-tropical-teal after:transition after:duration-300 after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:origin-bottom-right"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              aria-label="Contact Me"
              className="bg-twilight-indigo text-ghost-white  cursor-pointer px-4 py-2 rounded-lg overflow-hidden relative after:rounded-lg after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:w-full after:h-ful after:bg-ghost-white after:opacity-30 after:transition after:duration-300 after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:origin-bottom-right"
              onClick={() => setIsOpen(false)}
            >
              Contact Me
            </a>
          </SheetContent>
        </Sheet>
      )}
    </Fragment>
  );
};

export default MobileNavigationMenu;
