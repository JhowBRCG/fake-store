"use client";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { cn } from "@/lib/utils/cn";
import { useAccordion } from "@/lib/hooks/useAccordion";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Accordion({ title, children }: AccordionProps) {
  const { isOpen, toggleAccordion } = useAccordion();

  const AccordionIcon = isOpen ? IoIosArrowUp : IoIosArrowDown;
  const showAccordion = isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]";

  return (
    <div className="cursor-pointer">
      <div
        className="flex items-center justify-between p-[14px]"
        onClick={toggleAccordion}
      >
        <h2 className="uppercase">{title}</h2>
        <AccordionIcon className="text-xl" />
      </div>
      <div
        className={cn(
          "grid overflow-hidden transition-all duration-100",
          showAccordion,
        )}
      >
        <div className="overflow-hidden">
          <div className="p-[14px]">{children}</div>
        </div>
      </div>
    </div>
  );
}
