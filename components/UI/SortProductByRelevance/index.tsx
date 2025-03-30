"use client";

import { cn } from "@/lib/utils/cn";
import { useSortByRelevance } from "@/lib/hooks/useSortByRelevance";

export default function SortProductByPrice({
  className,
}: {
  className: string;
}) {
  const { handleRelevanceSort, isRelevanceActive } = useSortByRelevance();

  const activateRelevanceClass = isRelevanceActive
    ? "bg-red-400 text-white"
    : "bg-white";

  return (
    <div className={cn(className)} onClick={handleRelevanceSort}>
      <div
        className={cn(
          "cursor-pointer rounded-lg px-2 py-[5px]",
          activateRelevanceClass,
        )}
      >
        <p className="text-center text-xs">Relevance</p>
      </div>
    </div>
  );
}
