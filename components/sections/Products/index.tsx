"use client";

import ProductList from "@/components/products/ProductList";
import Pagination from "@/components/ui/Pagination";
import ErrorMessage from "@/components/ui/ErrorMessage";
import LoadingSkeletonCards from "@/components/ui/LoadingSkeletonCards";
import { useProducts } from "@/lib/hooks/queries/useProducts";
import { useProductsBySearch } from "@/lib/hooks/queries/useProductsBySearch";
import { calculateTotalPages } from "@/lib/utils/calculateTotalPages";
import { useProductParams } from "@/lib/hooks/useProductParams";

export default function Products() {
  const { currentPage, sort, order, query } = useProductParams();

  const searchResults = useProductsBySearch(query, currentPage, sort, order);
  const allProducts = useProducts(currentPage, sort, order);

  const { data, isLoading } = query ? searchResults : allProducts;

  const totalPages = calculateTotalPages(data?.total ?? 0);
  const showSearchQuery = query;
  const hasNoResults = data?.total === 0;

  if (isLoading) return <LoadingSkeletonCards cards={15} />;

  return (
    <section>
      {showSearchQuery && (
        <p className="mt-3 uppercase italic">
          The results for: <strong>{showSearchQuery}</strong>
        </p>
      )}
      {!hasNoResults && <ProductList products={data?.products ?? []} />}
      {hasNoResults && (
        <ErrorMessage message="NO PRODUCTS FOUND :/" className="mt-5" />
      )}
      {totalPages > 1 && (
        <nav className="mt-4">
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </nav>
      )}
    </section>
  );
}
