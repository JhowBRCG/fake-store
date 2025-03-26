import CategoryFilter from "../UI/CategoryFilter";
import SortProductByPrice from "../UI/SortProductByPrice";
import SortProductByRelevance from "../UI/SortProductByRelevance";

export default function FilterProducts() {
  return (
    <div className="flex items-center gap-2 bg-[#F5F5F5] p-[10px]">
      <p className="text-nowrap text-xs text-[#555555]">Classify by</p>
      <SortProductByRelevance className="w-full max-w-[80px]" />
      <CategoryFilter className="max-w-[80px]" />
      <SortProductByPrice className="w-full max-w-[200px]" />
    </div>
  );
}
