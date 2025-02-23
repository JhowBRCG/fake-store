import { productProps } from "../@types/productProps";

export async function getProducts(page: number, limit: number) {
  const response = await fetch(
    `https://fakestoreapi.in/api/products?page=${page}&limit=${limit}`,
  );
  const data = await response.json();

  if (!response.ok) throw new Error("Failed to fetch data");

  return data.products as Promise<productProps[]>;
}
