"use client";

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CATEGORIES } from "@/config";
import { useRouter, usePathname } from "next/navigation";

export default function FilterCategoryProduct() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathName = usePathname();

  const currentCategory = pathName.split("/")[2] || "Categories";

  const toggleSelect = () => setOpen(!open);

  const handleCategory = (category: string) => {
    router.push(`/category/${category}`);
    setOpen(false);
  };

  const Icon = open ? IoIosArrowUp : IoIosArrowDown;

  return (
    <div className="relative w-full max-w-[107px]">
      <div
        onClick={toggleSelect}
        className="flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-black bg-slate-50 px-2 py-1"
      >
        <p className="text-center text-xs capitalize">{currentCategory}</p>
        <Icon className="text-base" />
      </div>
      {open && (
        <div className="absolute mt-2 w-full rounded-lg bg-slate-50 p-2 px-0">
          <ul>
            {CATEGORIES.map((category) => (
              <li
                onClick={() => handleCategory(category)}
                key={category}
                className="cursor-default px-2 py-1 text-xs capitalize hover:bg-slate-200"
              >
                {category}
              </li>
            ))}
            <li
              onClick={() => router.push("/")}
              className="cursor-default px-2 py-1 text-xs capitalize hover:bg-slate-200"
            >
              All
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
