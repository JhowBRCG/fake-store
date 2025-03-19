"use client";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useProductSortPrice } from "@/lib/hooks/useProductSortPrice";

const sortItems = ["asc", "desc"];

export default function SortProductByPrice() {
  const {
    isFilterOpen,
    toggleFilter,
    handleSortFilter,
    allItems,
    getCurrentSortOrder,
  } = useProductSortPrice();

  const Icon = isFilterOpen ? IoIosArrowUp : IoIosArrowDown;

  return (
    <div className="relative w-full max-w-[50%]">
      <div
        onClick={toggleFilter}
        className="flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-black bg-slate-50 px-2 py-1"
      >
        <p className="text-center text-xs">{getCurrentSortOrder()}</p>
        <Icon className="text-base" />
      </div>

      {isFilterOpen && (
        <div className="absolute z-[5] mt-2 w-full rounded-lg bg-slate-50 p-2 px-0">
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
            <li
              onClick={allItems}
              className="cursor-default px-2 py-2 text-xs capitalize hover:bg-slate-200"
            >
              All
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
