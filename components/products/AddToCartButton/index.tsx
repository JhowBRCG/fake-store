"use client";

import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";

type AddToCartButtonProps = {
  product?: {
    id: number;
    title: string;
    price: number;
    images?: string[];
  };
};

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const dispatch = useDispatch();

  if (!product) return null;

  const { id, title, price, images = [] } = product;

  return (
    <button
      onClick={() =>
        dispatch(
          addToCart({ id, title, price, img: images?.[0] || "", quantity: 1 }),
        )
      }
      className="cursor-pointer rounded-md bg-[#F2CC8F] p-[9px] font-semibold"
    >
      ADD TO CART
    </button>
  );
}
