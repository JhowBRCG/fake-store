"use client";

import { useSelector } from "react-redux";
import { selectCartState } from "@/store/cartSlice";
import CartItems from "@/components/cart/CartItems";
import CartSummary from "@/components/cart/CartSummary";

export default function Cart() {
  const cartState = useSelector(selectCartState);

  return (
    <main className="my-[75px] px-[10px] py-[20px]">
      <p className="text-center">
        You have {cartState.totalProducts} products in cart
      </p>
      <CartItems />
      <CartSummary />
    </main>
  );
}
