import { IoMdSearch } from "react-icons/io";

export default function SearchInput() {
  return (
    <div className="relative">
      <input
        type="text"
        className="h-[35px] w-[215px] rounded-md pl-4 pr-8 focus:outline-1 focus:outline-black"
      />
      <button className="absolute inset-0 my-auto ml-auto h-[35px] w-[32px] cursor-pointer">
        <span className="absolute left-0 h-[0.1px] w-full -translate-x-[16px] rotate-90 bg-slate-200" />
        <IoMdSearch className="absolute inset-0 m-auto h-fit w-fit text-lg text-slate-300" />
      </button>
    </div>
  );
}
