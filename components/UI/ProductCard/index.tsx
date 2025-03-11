import Image from "next/image";
import { productProps } from "@/lib/@types/productProps";

type productCardProps = {
  product: productProps;
};

export default function ProductCard({ product }: productCardProps) {
  return (
    <article className="h-full bg-white px-4 py-6" key={product.id}>
      <Image
        src={product.images[0]}
        className="m-auto"
        width={300}
        height={300}
        alt="product image"
      />
      <h2 className="text-center text-sm">{product.title}</h2>
    </article>
  );
}
