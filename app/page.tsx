import Products from "@/components/Sections/Products";
import FilterProducts from "@/components/FilterProducts";

export default function Home() {
  return (
    <main className="mt-[75px] px-[10px] py-[20px]">
      <FilterProducts />
      <Products />
    </main>
  );
}
