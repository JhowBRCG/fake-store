"use client";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CATEGORIES } from "@/config";
import { usePathname } from "next/navigation";
import { formatCategory } from "@/lib/utils/formatCategory";
import { useCategoryFilter } from "@/lib/hooks/useCategoryFilter";

export default function CategoryFilter() {
  const pathName = usePathname();
  const { toggleFilter, handleCategory, isFilterOpen, showAllProducts } =
    useCategoryFilter();

  const currentCategory = formatCategory(
    pathName.split("/")[2] || "Categories",
  );

  const Icon = isFilterOpen ? IoIosArrowUp : IoIosArrowDown;

  return (
    <div className="relative w-full">
      <div
        onClick={toggleFilter}
        className="flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-black bg-slate-50 px-2 py-1"
      >
        <p className="text-center text-xs capitalize">{currentCategory}</p>
        <Icon className="text-base" />
      </div>
      {isFilterOpen && (
        <div className="absolute z-[5] mt-2 w-full rounded-lg bg-slate-50 p-2 px-0">
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
