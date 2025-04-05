"use client";

import CartItem from "../CartItem";
import { useSelector } from "react-redux";
import { selectCart } from "@/store/cartSlice";

export default function CartItems() {
  const cartItems = useSelector(selectCart);

  return (
    <ul className="mt-8 grid gap-1">
      {cartItems.map((cartItem) => (
        <li key={cartItem.id}>
          <CartItem product={cartItem} />
        </li>
      ))}
    </ul>
  );
}
