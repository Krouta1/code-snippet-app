import React from "react";

type NavbarButtonsProps = {};

const NavbarButtons = (props: NavbarButtonsProps) => {
  return (
    <div className="flex gap-2 max-sm:mt-8 max-sm:w-3/5 max-sm:flex-col">
      <button className="bg-primary rounded-md p-[8px] px-6 text-sm text-white max-sm:w-full">
        Sign In
      </button>
      <button className="text-primary border-primary hover:bg-primary rounded-md border p-[8px] px-6 text-sm hover:text-white max-sm:w-full">
        Sign Up
      </button>
    </div>
  );
};

export default NavbarButtons;
