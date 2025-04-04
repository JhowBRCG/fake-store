import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { FaWindowClose } from "react-icons/fa";

type ProductCartProps = {
  product: {
    id: number;
    img: string;
    title: string;
    price: number;
    quantity: number;
  };
};

export default function ProductCart({ product }: ProductCartProps) {
  const formattedPrice = formatPrice(product.price);

  return (
    <article className="relative bg-white p-4">
      <button className="absolute right-0 top-0 -translate-x-[16px] translate-y-[16px] cursor-pointer">
        <FaWindowClose className="text-lg text-neutral-400" />
      </button>
      <div className="grid grid-cols-[40%_60%] items-center gap-3">
        <div className="relative h-[130px]">
          <Image
            src={product.img}
            className="object-contain"
            fill
            alt={product.title}
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 300px"
          />
        </div>
        <div className="grid gap-1">
          <h2 className="text-sm">{product.title}</h2>
          <p className="text-sm">{formattedPrice}</p>
          <p className="text-sm">Quantity: {product.quantity}</p>
        </div>
      </div>
    </article>
  );
}
