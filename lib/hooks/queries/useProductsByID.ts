import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProductByID } from "@/lib/services/getProductByID";

export function useProductsByID(productID: number) {
  return useQuery({
    queryKey: ["product", productID],
    queryFn: () => getProductByID(productID),
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });
}
