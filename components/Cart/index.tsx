import { RiShoppingCartLine } from "react-icons/ri";

export default function Cart() {
  return (
    <div className="relative">
      <RiShoppingCartLine className="text-2xl" />
      <div className="absolute right-0 top-0 min-w-3 -translate-y-3 translate-x-2 rounded-full bg-slate-500 px-1">
        <p className="text-center text-xs text-white">1</p>
      </div>
    </div>
  );
}
