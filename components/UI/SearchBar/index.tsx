"use client";

import { IoMdSearch } from "react-icons/io";
import { useHandleSearch } from "@/lib/hooks/useHandleSearch";

export default function SearchBar() {
  const { searchQuery, setSearchQuery, handleSubmitSearchQuery } =
    useHandleSearch();

  return (
    <form className="relative" onSubmit={handleSubmitSearchQuery}>
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        name="search-bar"
        type="text"
        className="h-[35px] w-[215px] rounded-md pl-4 pr-8 focus:outline-1 focus:outline-black md:w-[400px]"
      />
      <button className="absolute inset-0 my-auto ml-auto h-[35px] w-[32px] cursor-pointer">
        <span className="absolute left-0 h-[0.1px] w-full -translate-x-[16px] rotate-90 bg-slate-200" />
        <IoMdSearch className="absolute inset-0 m-auto h-fit w-fit text-lg text-slate-300" />
      </button>
    </form>
  );
}
