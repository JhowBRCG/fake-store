"use client";

import { useSearchParams } from "next/navigation";
import ProductList from "@/components/products/ProductList";
import Pagination from "@/components/UI/Pagination";
import { useProductsByCategory } from "@/lib/hooks/queries/useProductsByCategory";
import calculateTotalPages from "@/lib/utils/calculateTotalPages";
import { formatCategory } from "@/lib/utils/formatCategory";

type ProductsCategoryProps = {
  categoryName: string;
};

export default function ProductsCategory({
  categoryName,
}: ProductsCategoryProps) {
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page") || 1);
  const sort = String(searchParams.get("sort") || "");
  const order = String(searchParams.get("order") || "");

  const { data, isLoading } = useProductsByCategory(
    categoryName,
    currentPage,
    sort,
    order,
  );

  if (isLoading) return <p>Loading...</p>;

  const totalPages = calculateTotalPages(data?.total || 0);

  return (
    <section>
      <p className="mt-3 uppercase italic">
        Category: <strong>{formatCategory(categoryName)}</strong>
      </p>
      <ProductList products={data?.products || []} />
      {totalPages > 1 && (
        <nav className="mt-4">
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </nav>
      )}
    </section>
  );
}
