"use client";

import { useSearchParams } from "next/navigation";
import ProductList from "@/components/ProductList";
import Pagination from "@/components/UI/Pagination";
import { useProducts } from "@/lib/hooks/useProducts";
import { useProductsBySearch } from "@/lib/hooks/useProductsBySearch";
import calculateTotalPages from "@/lib/utils/calculateTotalPages";

export default function Products() {
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page") || 1);
  const sort = String(searchParams.get("sort") || "");
  const order = String(searchParams.get("order") || "");
  const query = String(searchParams.get("q") || "");

  const searchResults = useProductsBySearch(query, currentPage, sort, order);
  const allProducts = useProducts(currentPage, sort, order);

  const { data, isLoading } = query ? searchResults : allProducts;

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
