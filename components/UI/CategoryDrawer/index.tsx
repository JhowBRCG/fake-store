import { CATEGORIES } from "@/config";
import { formatCategory } from "@/lib/utils/formatCategory";
import { cn } from "@/lib/utils/cn";

export default function CategoryDrawer({
  handleCategory,
  showAllProducts,
  isFilterOpen,
}: {
  handleCategory: (category: string) => void;
  showAllProducts: () => void;
  isFilterOpen: boolean;
}) {
  const animation = isFilterOpen ? "translate-y-0" : "translate-y-full";

  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 z-10 w-svw overflow-y-scroll bg-neutral-200 transition-transform duration-200",
        animation,
      )}
    >
      <ul className="grid grid-cols-2">
        {CATEGORIES.map((category) => (
          <li
            className="cursor-pointer text-nowrap border border-neutral-400 p-1 text-center text-sm capitalize hover:bg-red-400 hover:text-white"
            key={category}
            onClick={() => handleCategory(category)}
          >
            {formatCategory(category)}
          </li>
        ))}
        <li
          className="col-span-2 cursor-pointer border-t border-neutral-400 p-1 text-center text-sm hover:bg-red-400 hover:text-white"
          onClick={showAllProducts}
        >
          All
        </li>
      </ul>
    </nav>
  );
}
