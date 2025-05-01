"use client";

import ProductList from "@/components/products/ProductList";
import Pagination from "@/components/ui/Pagination";
import LoadingSkeletonCards from "@/components/ui/LoadingSkeletonCards";
import { useProductsByCategory } from "@/lib/hooks/queries/useProductsByCategory";
import { calculateTotalPages } from "@/lib/utils/calculateTotalPages";
import { formatCategory } from "@/lib/utils/formatCategory";
import { useProductParams } from "@/lib/hooks/useProductParams";
import { ErrorMessage } from "@/components/ui";

type ProductsCategoryProps = {
  categoryName: string;
};

export default function ProductsCategory({
  categoryName,
}: ProductsCategoryProps) {
  const { currentPage, sort, order } = useProductParams();

  const { data, isLoading } = useProductsByCategory(
    categoryName,
    currentPage,
    sort,
    order,
  );

  if (isLoading) return <LoadingSkeletonCards cards={10} />;

  const totalPages = calculateTotalPages(data?.total ?? 0);
  const hasNoResults = data?.total === 0;

  return (
    <section>
      <p className="mt-3 uppercase italic">
        Category: <strong>{formatCategory(categoryName)}</strong>
      </p>
      {!hasNoResults && <ProductList products={data?.products ?? []} />}
      {hasNoResults && (
        <ErrorMessage
          className="mt-4"
          message="NO PRODUCTS FOUND :/"
          goHome={true}
        />
      )}
      {totalPages > 1 && (
        <nav className="mt-4">
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </nav>
      )}
    </section>
  );
}
