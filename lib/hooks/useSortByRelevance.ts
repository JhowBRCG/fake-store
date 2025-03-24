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
    params.set("sort", "rating".toString());
    params.set("order", "desc".toString());
    router.push(`?${params.toString()}`);
  };

  return { handleRelevanceSort, isRelevanceActive };
}
