import { useSearchParams } from "next/navigation";

export function useProductParams() {
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page") ?? 1);
  const sort = searchParams.get("sort") ?? "";
  const order = searchParams.get("order") ?? "";
  const query = searchParams.get("q") ?? "";

  return { currentPage, sort, order, query };
}
