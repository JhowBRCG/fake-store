"use client";

import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "@/store/cartSlice";
import { selectCartState } from "@/store/cartSlice";
import { formatPrice } from "@/lib/utils";

export default function CartSummary() {
  const dispatch = useDispatch();
  const cartState = useSelector(selectCartState);
  const formattedPrice = formatPrice(cartState.totalPrice);

  if (!cartState.totalProducts) return null;

  return (
    <div className="mt-[33px] bg-[#F5F5F5] p-4" data-testid="summary">
      <p>
        Total Price: <span className="text-red-400">{formattedPrice}</span>
      </p>
      <div className="mt-[22px] flex items-center justify-between">
        <button
          onClick={() => dispatch(clearCart())}
          className="block cursor-pointer border border-red-400 px-[6px] py-[3px] text-sm text-red-400"
        >
          Clear Cart
        </button>
        <button className="block cursor-pointer rounded-md bg-white p-2 px-3 font-medium">
          Checkout
        </button>
      </div>
    </div>
  );
}
