import { Metadata } from "next";
import { formatCategory, capitalizeFirstLetter } from "@/lib/utils";
import FilterProducts from "@/components/products/FilterProducts";
import ProductsCategory from "@/components/sections/ProductsCategory";

type Props = {
  params: Promise<{ category_name: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category_name } = await params;
  const formattedCategory = capitalizeFirstLetter(
    formatCategory(category_name),
  );

  return {
    title: formattedCategory,
    description: `Buy anything you desire in our ${formattedCategory} category`,
  };
}

export default async function CategoryNamePage({ params }: Props) {
  const { category_name } = await params;

  return (
    <main className="mt-[75px] px-[10px] py-[20px]">
      <FilterProducts />
      <ProductsCategory categoryName={category_name} />
    </main>
  );
}
