import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible.js";
import { Button } from "../ui/button.js";
import { MoveUpRight } from "lucide-react";
import { stacks } from "@/constants/index.ts";

const TechStacks = () => {
  return (
    <div>
      {stacks.map((item) => (
        <div key={item.name} className="coll-stack">
          <Collapsible className="rounded-md data-[state=open]:bg-ghost-white data-[state=open]:mb-2 space-y-2">
            <CollapsibleTrigger asChild>
              <Button className="group w-full data-[state=open]:border-b data-[state=open]:border-gray-200 data-[state=open]:rounded-b-none bg-ghost-white text-tropical-teal hover:bg-ghost-white hover:text-tropical-teal cursor-pointer py-6 text-base">
                <span className="text-lg">{item.name}</span>
                <div className="ml-auto rounded-full h-8 w-8 flex items-center justify-center border-2 border-tropical-teal">
                  <MoveUpRight className="size-5 group-data-[state=open]:rotate-180" />
                </div>
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
              {item.techs.map((tech) => (
                <span className="text-tropical-teal">{tech}</span>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>
      ))}
    </div>
  );
};

export default TechStacks;
