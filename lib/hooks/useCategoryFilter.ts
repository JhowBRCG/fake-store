import { useRouter } from "next/navigation";
import { useState } from "react";

export function useCategoryFilter() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const router = useRouter();

  const toggleFilter = () => setIsFilterOpen((prev) => !prev);
  const closeFilter = () => setIsFilterOpen(false);

  const handleCategory = (category: string) => {
    router.push(`/category/${category}`);
    closeFilter();
  };

  const showAllProducts = () => router.push("/");

  return {
    isFilterOpen,
    toggleFilter,
    closeFilter,
    handleCategory,
    showAllProducts,
  };
}
