"use client";

import { useCategoryFilter } from "@/lib/hooks/useCategoryFilter";
import { cn } from "@/lib/utils/cn";
import CategoryDrawer from "../CategoryDrawer";
import { useDisableScroll } from "@/lib/hooks/useDisableScroll";

export default function CategoryFilter({ className }: { className: string }) {
  const { toggleFilter, handleCategory, isFilterOpen, showAllProducts } =
    useCategoryFilter();

  useDisableScroll(isFilterOpen);

  return (
    <div className={`w-full ${cn(className)}`} onClick={toggleFilter}>
      <div className="w-full cursor-pointer rounded-lg bg-white px-2 py-[5px]">
        <p className="text-center text-xs capitalize">categories</p>
      </div>
      {isFilterOpen && (
        <CategoryDrawer
          handleCategory={handleCategory}
          showAllProducts={showAllProducts}
        />
      )}
    </div>
  );
}
