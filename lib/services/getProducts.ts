import { apiResponse } from "../@types/productProps";
import { API_URL, ITEMS_PER_PAGE } from "@/config";

export async function getProducts(
  currentPage: number,
  sort?: string,
  order?: string,
) {
  const skip = (currentPage - 1) * ITEMS_PER_PAGE;

  const response = await fetch(
    `${API_URL}?limit=${ITEMS_PER_PAGE}&skip=${skip}&sortBy=${sort || ""}&order=${order || ""}`,
  );

  if (!response.ok) throw new Error("Failed to fetch data");

  const data = await response.json();

  return data as apiResponse;
}
