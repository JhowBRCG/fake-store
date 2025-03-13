import { useRouter } from "next/navigation";
import { useState } from "react";

export function useFilterCategoryProduct() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const router = useRouter();

  const toggleFilter = () => setIsFilterOpen((prev) => !prev);
  const closeFilter = () => setIsFilterOpen(false);

  const handleCategory = (category: string) => {
    router.push(`/category/${category}`);
    closeFilter();
  };

  const allProducts = () => router.push("/");

  return {
    toggleFilter,
    closeFilter,
    handleCategory,
    allProducts,
    isFilterOpen,
  };
}
