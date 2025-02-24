import { productProps } from "../@types/productProps";

export async function getProducts(currentPage: number, itemsPerPage: number) {
  const response = await fetch(
    `https://fakestoreapi.in/api/products?page=${currentPage}&limit=${itemsPerPage}`,
  );

  if (!response.ok) throw new Error("Failed to fetch data");

  const data = await response.json();

  return data.products as Promise<productProps[]>;
}
