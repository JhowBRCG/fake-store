"use client";

import { useSearchParams } from "next/navigation";
import ProductList from "@/components/ProductList";
import Pagination from "@/components/UI/Pagination";
import { useProducts } from "@/lib/hooks/useProducts";

export default function Products() {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page") || 1);
  const { data, isLoading } = useProducts(currentPage);

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
