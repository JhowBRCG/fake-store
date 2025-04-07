import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export function useSortByRelevance() {
  const [isRelevanceActive, setIsRelevanceActive] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const sortValue = searchParams.get("sort");
    setIsRelevanceActive(sortValue === "rating");
  }, [searchParams]);

  const handleRelevanceSort = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (!isRelevanceActive) {
      params.set("sort", "rating".toString());
      params.set("order", "desc".toString());
      return router.push(`?${params.toString()}`);
    }

    params.delete("sort", "rating".toString());
    params.delete("order", "desc".toString());
    router.push(`?${params.toString()}`);
  };

  return { handleRelevanceSort, isRelevanceActive };
}
