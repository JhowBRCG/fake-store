import { ITEMS_PER_PAGE } from "@/config";

export function calculateTotalPages(totalProducts: number) {
  return Math.ceil(totalProducts / ITEMS_PER_PAGE);
}
