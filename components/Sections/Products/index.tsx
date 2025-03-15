"use client";

import { useSearchParams } from "next/navigation";
import ProductList from "@/components/ProductList";
import Pagination from "@/components/UI/Pagination";
import { useProducts } from "@/lib/hooks/useProducts";
import calculateTotalPages from "@/lib/utils/calculateTotalPages";

export default function Products() {
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page") || 1);
  const sort = searchParams.get("sort") || undefined;
  const order = searchParams.get("order") || undefined;

  const { data, isLoading } = useProducts(currentPage, sort, order);

  const totalPages = calculateTotalPages(data?.total || 0);

  if (isLoading) return <p>Loading...</p>;

  return (
    <section>
      <ProductList products={data?.products || []} />
      <nav className="mt-4">
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </nav>
    </section>
  );
}
