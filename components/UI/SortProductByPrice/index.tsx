"use client";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useProductSortPrice } from "@/lib/hooks/useProductSortPrice";
import { cn } from "@/lib/utils/cn";

const sortItems = ["asc", "desc"];

export default function SortProductByPrice({
  className,
}: {
  className: string;
}) {
  const { isFilterOpen, toggleFilter, handleSortFilter, getCurrentSortOrder } =
    useProductSortPrice();

  const Icon = isFilterOpen ? IoIosArrowUp : IoIosArrowDown;

  return (
    <div className={`relative ${cn(className)}`}>
      <div
        onClick={toggleFilter}
        className="flex w-full cursor-pointer items-center justify-between rounded-lg border-black bg-white px-2 py-[5px]"
      >
        <p className="text-center text-xs">{getCurrentSortOrder()}</p>
        <Icon className="text-base" />
      </div>

      {isFilterOpen && (
        <div className="absolute z-[5] mt-2 w-full rounded-lg bg-white px-0 shadow-md">
          <ul>
            {sortItems.map((item) => (
              <li
                className="cursor-default border-b px-2 py-2 text-xs capitalize hover:bg-slate-200"
                key={item}
                onClick={() => handleSortFilter(item)}
              >
                {item === "asc" ? "ascending" : "descending"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
