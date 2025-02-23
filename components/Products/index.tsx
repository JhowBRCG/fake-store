"use client";

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/services/getProducts";
import ProductCard from "../ProductCard";
import Link from "next/link";

export default function Products() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(1, 4),
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="mt-[20px] grid grid-cols-2 gap-[2px] overflow-hidden rounded-lg">
      {data?.map((product) => (
        <Link href="" key={product.id}>
          <ProductCard product={product} />
        </Link>
      ))}
    </section>
  );
}
