import { useState } from "react";

export function useAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen((prev) => !prev);

  return { isOpen, toggleAccordion };
}
