"use client";

import { useSelector } from "react-redux";
import { selectCart, selectCartState } from "@/store/cartSlice";
import { formatPrice } from "@/lib/utils";
import ProductCart from "@/components/products/ProductCart";

export default function Cart() {
  const cart = useSelector(selectCart);
  const cartState = useSelector(selectCartState);

  return (
    <main className="my-[75px] px-[10px] py-[20px]">
      <p className="text-center">
        You have {cartState.totalProducts} products in cart
      </p>
      <ul className="mt-8 grid gap-1">
        {cart.map((product) => (
          <li key={product.id}>
            <ProductCart product={product} />
          </li>
        ))}
      </ul>
      <div className="mt-[33px] bg-[#F5F5F5] p-4">
        <p>
          Total Price:{" "}
          <span className="text-red-400">
            {formatPrice(cartState.totalPrice)}
          </span>
        </p>
        <button className="mt-[22px] cursor-pointer border border-red-400 px-[6px] py-[3px] text-sm text-red-400">
          Clear Cart
        </button>
      </div>
    </main>
  );
}
