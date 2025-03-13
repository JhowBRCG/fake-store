"use client";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CATEGORIES } from "@/config";
import { usePathname } from "next/navigation";
import { formatCategory } from "@/lib/utils/formatCategory";
import { useFilterCategoryProduct } from "@/lib/hooks/useFilterCategoryProduct";

export default function FilterCategoryProduct() {
  const pathName = usePathname();
  const { toggleFilter, handleCategory, isFilterOpen, allProducts } =
    useFilterCategoryProduct();

  const currentCategory = formatCategory(
    pathName.split("/")[2] || "Categories",
  );

  const Icon = isFilterOpen ? IoIosArrowUp : IoIosArrowDown;

  return (
    <div className="relative w-full max-w-[50%]">
      <div
        onClick={toggleFilter}
        className="flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-black bg-slate-50 px-2 py-1"
      >
        <p className="text-center text-xs capitalize">{currentCategory}</p>
        <Icon className="text-base" />
      </div>
      {isFilterOpen && (
        <div className="absolute mt-2 w-full rounded-lg bg-slate-50 p-2 px-0">
          <ul>
            {CATEGORIES.map((category) => (
              <li
                onClick={() => handleCategory(category)}
                key={category}
                className="cursor-default px-2 py-1 text-xs capitalize hover:bg-slate-200"
              >
                {formatCategory(category)}
              </li>
            ))}
            <li
              onClick={allProducts}
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
