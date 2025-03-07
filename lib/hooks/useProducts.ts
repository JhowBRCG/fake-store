import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/getProducts";

export function useProducts(currentPage: number) {
  return useQuery({
    queryKey: ["products", currentPage],
    queryFn: () => getProducts(currentPage),
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });
}
