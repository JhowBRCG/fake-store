import ProductDetails from "@/components/sections/ProductDetails";

type Props = {
  params: Promise<{ productID: string }>;
};

export default async function ProductIdPage({ params }: Props) {
  const { productID } = await params;

  return (
    <main className="mt-[75px] px-[10px] py-[20px]">
      <ProductDetails productID={productID} />
    </main>
  );
}
