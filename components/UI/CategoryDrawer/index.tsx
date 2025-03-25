import { CATEGORIES } from "@/config";
import { formatCategory } from "@/lib/utils/formatCategory";
import { cn } from "@/lib/utils/cn";

export default function SideBar({
  handleCategory,
  showAllProducts,
  isFilterOpen,
}: {
  handleCategory: (category: string) => void;
  showAllProducts: () => void;
  isFilterOpen: boolean;
}) {
  const animation = isFilterOpen ? "translate-y-0" : "translate-y-[999px]";

  return (
    <nav
      className={cn(
        "absolute bottom-0 left-0 z-10 w-svw overflow-y-scroll bg-neutral-200 transition",
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
