import ProductDetails from "@/components/sections/ProductDetails";
import { getProductByID } from "@/lib/services/getProductByID";
import { Metadata } from "next";

type Props = {
  params: Promise<{ productID: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productID } = await params;

  const product = await getProductByID(productID);

  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductIdPage({ params }: Props) {
  const { productID } = await params;

  return (
    <main className="mt-[75px] px-[10px] py-[20px]">
      <ProductDetails productID={productID} />
    </main>
  );
}
