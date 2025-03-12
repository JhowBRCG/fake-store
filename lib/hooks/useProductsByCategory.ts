import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "../services/getProductsByCategory";

export function useProductsByCategory(category: string, currentPage: number) {
  return useQuery({
    queryKey: ["products", currentPage, category],
    queryFn: () => getProductsByCategory(category, currentPage),
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });
}
