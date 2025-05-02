import Cart from "../../ui/Cart";
import SearchBar from "../../ui/SearchBar";
import Link from "next/link";
import { Suspense } from "react";

export default function Header() {
  return (
    <header className="fixed top-0 z-10 h-[75px] w-full items-center justify-between bg-slate-50">
      <div className="m-auto flex h-full w-full max-w-container-md items-center justify-between px-[16px] lg:max-w-container-lg 2xl:max-w-container-2xl">
        <Link href="/">STORE</Link>
        <Suspense>
          <SearchBar />
        </Suspense>
        <Cart />
      </div>
    </header>
  );
}
