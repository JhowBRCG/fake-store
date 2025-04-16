import { CATEGORIES } from "@/config";
import { formatCategory } from "@/lib/utils/formatCategory";
import { cn } from "@/lib/utils/cn";
import { FaWindowClose } from "react-icons/fa";

export default function CategoryDrawer({
  handleCategory,
  showAllProducts,
  isFilterOpen,
}: {
  handleCategory: (category: string) => void;
  showAllProducts: () => void;
  isFilterOpen: boolean;
}) {
  const animation = isFilterOpen ? "translate-x-0" : "-translate-x-full";

  return (
    <nav
      className={cn(
        "fixed left-0 top-0 z-10 h-screen w-[50%] bg-white shadow-md transition-transform duration-200 md:w-[30%] lg:w-[20%] 2xl:w-[15%]",
        animation,
      )}
    >
      <div className="flex h-full flex-col">
        <button className="w-full cursor-pointer border-b border-neutral-400 py-4">
          <FaWindowClose className="m-auto text-center text-lg text-red-600" />
        </button>
        <ul className="flex-1 overflow-y-auto">
          {CATEGORIES.map((category) => (
            <li
              className="cursor-pointer text-nowrap border-b border-neutral-400 py-2 text-center text-sm capitalize hover:bg-red-400 hover:text-white md:py-[6px]"
              key={category}
              onClick={() => handleCategory(category)}
              data-testid="category-item"
            >
              {formatCategory(category)}
            </li>
          ))}
          <li
            className="col-span-full cursor-pointer border-b border-neutral-400 py-2 text-center text-sm hover:bg-red-400 hover:text-white md:py-[6px]"
            onClick={showAllProducts}
          >
            All
          </li>
        </ul>
      </div>
    </nav>
  );
}
