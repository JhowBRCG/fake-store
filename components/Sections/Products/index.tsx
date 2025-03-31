"use client";

import { useSearchParams } from "next/navigation";
import ProductList from "@/components/products/ProductList";
import Pagination from "@/components/UI/Pagination";
import { useProducts } from "@/lib/hooks/queries/useProducts";
import { useProductsBySearch } from "@/lib/hooks/queries/useProductsBySearch";
import calculateTotalPages from "@/lib/utils/calculateTotalPages";
import ProductsNotFound from "@/components/UI/ProductsNotFound";

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
  const showSearchQuery = searchParams.get("q");

  if (isLoading) return <p>Loading...</p>;

  return (
    <section>
      {showSearchQuery && (
        <p className="mt-3 uppercase italic">
          The results for: <strong>{showSearchQuery}</strong>
        </p>
      )}
      <ProductList products={data?.products || []} />
      {data?.total === 0 && <ProductsNotFound className="mt-4 p-5" />}
      {totalPages > 1 && (
        <nav className="mt-4">
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </nav>
      )}
    </section>
  );
}
