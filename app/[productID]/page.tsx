import ProductDetails from "@/components/Sections/ProductDetails";

export default async function page({
  params,
}: {
  params: Promise<{ productID: string }>;
}) {
  const { productID } = await params;

  return (
    <main className="mt-[75px] px-[10px] py-[20px]">
      <ProductDetails productID={productID} />
    </main>
  );
}
