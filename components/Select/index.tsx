"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function Select() {
  const [open, setOpen] = useState(false);

  const toggleSelect = () => setOpen(!open);

  const Icon = open ? IoIosArrowUp : IoIosArrowDown;

  return (
    <div className="relative w-full max-w-[107px]">
      <div
        onClick={toggleSelect}
        className="flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-black bg-slate-50 px-2 py-1"
      >
        <p className="text-center text-xs">Categories</p>
        <Icon className="text-base" />
      </div>
      {open && (
        <div className="absolute mt-2 w-full rounded-lg bg-slate-50 p-2 px-0">
          <ul>
            <li className="cursor-default px-2 py-1 text-xs hover:bg-slate-200">
              Eletronics
            </li>
            <li className="cursor-default px-2 py-1 text-xs hover:bg-slate-200">
              Games
            </li>
            <li className="cursor-default px-2 py-1 text-xs hover:bg-slate-200">
              Audio
            </li>
            <li className="cursor-default px-2 py-1 text-xs hover:bg-slate-200">
              Movies
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
