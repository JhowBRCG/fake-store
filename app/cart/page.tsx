import CartItems from "@/components/cart/CartItems";
import CartSummary from "@/components/cart/CartSummary";
import CartHeader from "@/components/cart/CartHeader";

export default function Cart() {
  return (
    <main className="my-[90px] px-[10px] py-[20px]">
      <CartHeader />
      <CartItems />
      <CartSummary />
    </main>
  );
}
