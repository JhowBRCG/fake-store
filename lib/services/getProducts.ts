import { productProps } from "../@types/productProps";
import { API_URL, ITEMS_PER_PAGE } from "@/config";

export async function getProducts(currentPage: number) {
  const response = await fetch(
    `${API_URL}?page=${currentPage}&limit=${ITEMS_PER_PAGE}`,
  );

  if (!response.ok) throw new Error("Failed to fetch data");

  const data = await response.json();

  return data.products as productProps[];
}
