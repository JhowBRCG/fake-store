"use client";

import { selectCartState } from "@/store/cartSlice";
import { useSelector } from "react-redux";

export default function CartHeader() {
  const cartState = useSelector(selectCartState);
  const totalProducts = cartState.totalProducts;

  const noProductsMessage =
    totalProducts === 0 && "You don't have any product in cart";
  const singularMessage =
    totalProducts === 1 && `You have ${totalProducts} product in cart`;
  const pluralMessage =
    totalProducts > 1 && `You have ${totalProducts} products in cart`;

  return (
    <p className="text-center md:text-lg">
      {noProductsMessage} {singularMessage} {pluralMessage}
    </p>
  );
}
