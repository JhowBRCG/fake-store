"use client";

import { IoMdSearch } from "react-icons/io";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSubmitSearchQuery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("q", searchQuery.toString());
    router.push(`?${params.toString()}`);

    setSearchQuery("");
  };

  return (
    <form className="relative" onSubmit={handleSubmitSearchQuery}>
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        name="search-bar"
        type="text"
        className="h-[35px] w-[215px] rounded-md pl-4 pr-8 focus:outline-1 focus:outline-black"
      />
      <button className="absolute inset-0 my-auto ml-auto h-[35px] w-[32px] cursor-pointer">
        <span className="absolute left-0 h-[0.1px] w-full -translate-x-[16px] rotate-90 bg-slate-200" />
        <IoMdSearch className="absolute inset-0 m-auto h-fit w-fit text-lg text-slate-300" />
      </button>
    </form>
  );
}
