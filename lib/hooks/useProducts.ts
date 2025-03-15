import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/getProducts";

export function useProducts(
  currentPage: number,
  sort?: string,
  order?: string,
) {
  return useQuery({
    queryKey: ["products", currentPage, sort, order],
    queryFn: () => getProducts(currentPage, sort, order),
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });
}
