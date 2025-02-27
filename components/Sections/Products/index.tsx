"use client";

import { useSearchParams } from "next/navigation";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/services/getProducts";
import ProductList from "@/components/ProductList";
import Pagination from "@/components/UI/Pagination";

export default function Products() {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page") || 1);

  const { data, isLoading } = useQuery({
    queryKey: ["products", currentPage],
    queryFn: () => getProducts(currentPage),
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <section>
      <ProductList products={data || []} />
      <nav className="mt-4">
        <Pagination currentPage={currentPage} />
      </nav>
    </section>
  );
}
