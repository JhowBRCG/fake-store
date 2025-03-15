import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "../services/getProductsByCategory";

export function useProductsByCategory(
  category: string,
  currentPage: number,
  sort: string,
  order: string,
) {
  return useQuery({
    queryKey: ["products", currentPage, category, sort, order],
    queryFn: () => getProductsByCategory(category, currentPage, sort, order),
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });
}
