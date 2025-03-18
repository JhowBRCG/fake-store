import CategoryFilter from "../UI/CategoryFilter";
import SortProductByPrice from "../UI/SortProductByPrice";

export default function FilterProducts() {
  return (
    <div className="flex items-center gap-2">
      <CategoryFilter />
      <SortProductByPrice />
    </div>
  );
}
