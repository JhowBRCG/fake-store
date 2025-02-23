import Image from "next/image";
import { productProps } from "@/lib/@types/productProps";

type productCardProps = {
  product: productProps;
};

export default function ProductCard({ product }: productCardProps) {
  return (
    <article className="bg-white px-4 py-6" key={product.id}>
      <Image src={product.image} width={300} height={300} alt="product image" />
      <h2 className="text-sm">{product.title}</h2>
    </article>
  );
}
