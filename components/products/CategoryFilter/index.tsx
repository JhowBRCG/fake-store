"use client";

import { useCategoryFilter } from "@/lib/hooks/useCategoryFilter";
import { cn } from "@/lib/utils/cn";
import CategoryDrawer from "../CategoryDrawer";
import { useDisableScroll } from "@/lib/hooks/useDisableScroll";

export default function CategoryFilter({ className }: { className: string }) {
  const { toggleFilter, handleCategory, isFilterOpen, showAllProducts } =
    useCategoryFilter();

  useDisableScroll(isFilterOpen);

  const activateCategoryClass = isFilterOpen
    ? "bg-red-400 text-white"
    : "bg-white";

  return (
    <div className={`w-full ${cn(className)}`} onClick={toggleFilter}>
      <div
        className={cn(
          "w-full cursor-pointer rounded-lg px-2 py-[5px]",
          activateCategoryClass,
        )}
      >
        <p className="text-center text-xs capitalize">categories</p>
      </div>
      <CategoryDrawer
        handleCategory={handleCategory}
        showAllProducts={showAllProducts}
        isFilterOpen={isFilterOpen}
      />
    </div>
  );
}
