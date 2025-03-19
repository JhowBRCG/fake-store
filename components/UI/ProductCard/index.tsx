import Image from "next/image";
import { productProps } from "@/lib/@types/productProps";

type productCardProps = {
  product: productProps;
};

export default function ProductCard({ product }: productCardProps) {
  return (
    <article className="h-full bg-white px-4 py-6" key={product.id}>
      <div className="relative h-[200px] w-full">
        <Image
          src={product.images[0]}
          className="m-auto object-contain"
          fill
          priority
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 300px"
          alt={product.title}
        />
      </div>
      <h2 className="text-center text-sm">{product.title}</h2>
      <p className="mt-3 text-center">${product.price}</p>
    </article>
  );
}
