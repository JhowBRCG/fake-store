import { ITEMS_PER_PAGE } from "@/config";

export default function calculateTotalPages(totalProducts: number) {
  return Math.ceil(totalProducts / ITEMS_PER_PAGE);
}
