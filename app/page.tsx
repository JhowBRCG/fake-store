import Products from "@/components/sections/Products";
import FilterProducts from "@/components/products/FilterProducts";
import HeaderBanner from "@/components/sections/HeaderBanner";

export default function Home() {
  return (
    <main className="mt-[75px] px-[10px] py-[20px]">
      <HeaderBanner />
      <FilterProducts />
      <Products />
    </main>
  );
}
