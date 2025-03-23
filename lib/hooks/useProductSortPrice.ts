import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export function useProductSortPrice() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const toggleFilter = () => setIsFilterOpen((prev) => !prev);
  const closeFilter = () => setIsFilterOpen(false);

  const handleSortFilter = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", "price".toString());
    params.set("order", `${value}`.toString());
    router.push(`?${params.toString()}`);
    closeFilter();
  };

  const getCurrentSortOrder = () => {
    const orderOption = searchParams.get("order")?.toString();
    if (orderOption === "asc") return "Ascending";
    if (orderOption === "desc") return "Descending";

    return "Price";
  };

  return {
    isFilterOpen,
    toggleFilter,
    handleSortFilter,
    getCurrentSortOrder,
  };
}
