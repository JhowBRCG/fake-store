import Image from "next/image";
import { productProps } from "@/lib/@types/productProps";
import DiscountPercentage from "../DiscountPercentage";
import { FaStar } from "react-icons/fa";

type productCardProps = {
  product: productProps;
};

export default function ProductCard({ product }: productCardProps) {
  const discount = Math.floor(product.discountPercentage);
  const rating = product.rating.toPrecision(2);

  return (
    <article className="h-full bg-white" key={product.id}>
      <div className="relative h-[200px] w-full border-b">
        <Image
          src={product.images[0]}
          className="m-auto object-contain"
          fill
          priority
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 300px"
          alt={product.title}
        />
      </div>
      <div className="px-[8px] py-[15px]">
        <h2>{product.title}</h2>
        <div className="flex items-center gap-1">
          <p className="mt-[7px]">${product.price}</p>
          <DiscountPercentage discount={discount} />
        </div>
        <div className="mt-[8px] flex items-center">
          <div className="flex items-center gap-1 border-r pr-[4px]">
            <FaStar className="text-xs text-[#FFBD1B]" />
            <p className="text-xs">{rating}</p>
          </div>
          <p className="pl-[4px] text-xs">{product.stock} remaining</p>
        </div>
      </div>
    </article>
  );
}
