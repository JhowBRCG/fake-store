import Cart from "../Cart";

export default function Header() {
  return (
    <div className="fixed flex h-[75px] w-full items-center justify-between bg-slate-50 px-[16px]">
      <p>STORE</p>
      <Cart />
    </div>
  );
}
