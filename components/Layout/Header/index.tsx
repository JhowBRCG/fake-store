import Cart from "../../UI/Cart";
import SearchBar from "../../UI/SearchBar";

export default function Header() {
  return (
    <div className="fixed top-0 z-10 h-[75px] w-full items-center justify-between bg-slate-50">
      <div className="m-auto flex h-full w-full max-w-[700px] items-center justify-between px-[16px]">
        <p>STORE</p>
        <SearchBar />
        <Cart />
      </div>
    </div>
  );
}
