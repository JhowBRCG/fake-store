import FilterProducts from "@/components/products/FilterProducts";
import ProductsCategory from "@/components/sections/ProductsCategory";

type Props = {
  params: Promise<{ category_name: string }>;
};

export default async function CategoryNamePage({ params }: Props) {
  const { category_name } = await params;

  return (
    <main className="mt-[75px] px-[10px] py-[20px]">
      <FilterProducts />
      <ProductsCategory categoryName={category_name} />
    </main>
  );
}
