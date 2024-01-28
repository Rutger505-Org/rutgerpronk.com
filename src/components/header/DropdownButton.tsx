"use client";

import React from "react";

interface DropdownButtonProps {
  openDropdown: boolean;
  setOpenDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DropdownButton({
  openDropdown,
  setOpenDropdown,
}: Readonly<DropdownButtonProps>) {
  function onClick(e: React.MouseEvent<HTMLButtonElement>) {
    setOpenDropdown(!openDropdown);
  }

  return (
    <button
      onClick={onClick}
      className={
        "group flex h-full w-7 cursor-pointer flex-col items-center justify-center gap-y-[6px]"
      }
    >
      <div
        className={`${
          openDropdown && "translate-y-[9px] rotate-45"
        } h-[3px] w-full rounded-xl bg-textPrimary transition-all duration-300 group-hover:bg-accent
        `}
      ></div>
      <div
        className={`${
          openDropdown && "opacity-0"
        } h-[3px] w-full rounded-xl bg-textPrimary transition-all duration-300 group-hover:bg-accent`}
      ></div>
      <div
        className={`${
          openDropdown && "-translate-y-[9px] -rotate-45"
        } h-[3px] w-full rounded-xl bg-textPrimary transition-all duration-300 group-hover:bg-accent`}
      ></div>
    </button>
  );
}
