import React from "react";

const NavButtons = () => {
  return (
    <div className="flex gap-2 max-sm:mt-8 max-sm:w-3/5 max-sm:flex-col">
      <button
        className={`bg-primary cursor-pointer rounded-md p-[8px] px-6 text-sm text-white max-sm:w-full`}
      >
        Sign In
      </button>
      <button
        className={`border-primary text-primary hover:bg-primary cursor-pointer rounded-md border p-[8px] px-6 text-sm transition-colors hover:text-white`}
      >
        Sign Up
      </button>
    </div>
  );
};

export default NavButtons;
