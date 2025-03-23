import CategoryFilter from "../UI/CategoryFilter";
import SortProductByPrice from "../UI/SortProductByPrice";

export default function FilterProducts() {
  return (
    <div className="flex items-center gap-2 bg-neutral-100 p-[10px]">
      <p className="text-xs text-[#555555]">Classify by</p>
      <CategoryFilter />
      <SortProductByPrice />
    </div>
  );
}
