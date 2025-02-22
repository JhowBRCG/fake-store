import Cart from "../Cart";
import SearchInput from "../SearchInput";

export default function Header() {
  return (
    <div className="fixed top-0 flex h-[75px] w-full items-center justify-between bg-slate-50 px-[16px]">
      <p>STORE</p>
      <SearchInput />
      <Cart />
    </div>
  );
}
