import { productProps } from "../@types/productProps";
import { API_URL } from "@/config";

export async function getProductByID(productID: string) {
  const response = await fetch(`${API_URL}/${productID}`);

  if (!response.ok) throw new Error("Failed to fetch data");

  const data = await response.json();

  return data as productProps;
}
