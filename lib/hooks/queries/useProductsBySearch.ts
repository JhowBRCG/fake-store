import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProductsBySearch } from "../../services/getProductsBySearch";

export function useProductsBySearch(
  query: string,
  currentPage: number,
  sort: string,
  order: string,
) {
  return useQuery({
    queryKey: ["productsSearch", query, currentPage, sort, order],
    queryFn: () => getProductsBySearch(query, currentPage, sort, order),
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
    enabled: !!query,
  });
}
