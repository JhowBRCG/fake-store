"use client";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CATEGORIES } from "@/config";
import { usePathname } from "next/navigation";
import { formatCategory } from "@/lib/utils/formatCategory";
import { useCategoryFilter } from "@/lib/hooks/useCategoryFilter";
import { cn } from "@/lib/utils/cn";

export default function CategoryFilter({ className }: { className: string }) {
  const pathName = usePathname();
  const { toggleFilter, handleCategory, isFilterOpen, showAllProducts } =
    useCategoryFilter();

  const currentCategory = formatCategory(
    pathName.split("/")[2] || "Categories",
  );

  const Icon = isFilterOpen ? IoIosArrowUp : IoIosArrowDown;

  return (
    <div className={`relative w-full ${cn(className)}`}>
      <div
        onClick={toggleFilter}
        className="flex w-full cursor-pointer items-center justify-between rounded-lg bg-white px-2 py-[5px]"
      >
        <p className="text-center text-xs capitalize">{currentCategory}</p>
        <Icon className="text-base" />
      </div>
      {isFilterOpen && (
        <div className="absolute z-[5] mt-2 w-full rounded-lg bg-white p-2 px-0 shadow-md">
          <ul className="relative grid grid-cols-2">
            {CATEGORIES.map((category) => (
              <li
                onClick={() => handleCategory(category)}
                key={category}
                className="cursor-default border-b border-r px-2 py-2 text-xs capitalize hover:bg-slate-200"
              >
                {formatCategory(category)}
              </li>
            ))}
            <li
              onClick={showAllProducts}
              className="col-span-2 cursor-default px-2 py-2 text-center text-xs capitalize hover:bg-slate-200"
            >
              All
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
