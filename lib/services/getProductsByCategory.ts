import { productProps } from "../@types/productProps";
import { API_URL, ITEMS_PER_PAGE } from "@/config";

export async function getProductsByCategory(
  category: string,
  currentPage: number,
) {
  const response = await fetch(
    `${API_URL}/category?type=${category}&page=${currentPage}&limit=${ITEMS_PER_PAGE}`,
  );

  if (!response.ok) throw new Error("Failed to fetch data");

  const data = await response.json();

  return data.products as productProps[];
}
