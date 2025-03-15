import FilterCategoryProduct from "../UI/FilterCategoryProduct";
import SortProductByPrice from "../UI/SortProductByPrice";

export default function FilterProducts() {
  return (
    <div className="flex items-center gap-2">
      <FilterCategoryProduct />
      <SortProductByPrice />
    </div>
  );
}
