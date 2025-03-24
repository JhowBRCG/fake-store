"use client";

import { cn } from "@/lib/utils/cn";
import { useSortByRelevance } from "@/lib/hooks/useSortByRelevance";

export default function SortProductByPrice({
  className,
}: {
  className: string;
}) {
  const { handleRelevanceSort, isRelevanceActive } = useSortByRelevance();

  const relevanceColor = isRelevanceActive && "bg-red-400 text-white";

  return (
    <div className={`relative ${cn(className)}`} onClick={handleRelevanceSort}>
      <div
        className={`flex w-full cursor-pointer items-center justify-between rounded-lg border-black bg-white ${cn(relevanceColor)} px-2 py-[5px]`}
      >
        <p className="text-center text-xs">Relevance</p>
      </div>
    </div>
  );
}
