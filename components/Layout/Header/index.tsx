import Cart from "../../UI/Cart";
import SearchBar from "../../UI/SearchBar";

export default function Header() {
  return (
    <div className="fixed top-0 z-10 h-[75px] w-full items-center justify-between bg-slate-50">
      <div className="2xl:max-w-container-2xl max-w-container-md lg:max-w-container-lg m-auto flex h-full w-full items-center justify-between px-[16px]">
        <p>STORE</p>
        <SearchBar />
        <Cart />
      </div>
    </div>
  );
}
