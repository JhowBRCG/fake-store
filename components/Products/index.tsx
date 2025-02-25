"use client";

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/services/getProducts";
import ProductList from "../ProductList";

export default function Products() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(1),
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <section>
      <ProductList products={data || []} />
    </section>
  );
}
