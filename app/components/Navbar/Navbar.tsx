import React from "react";
import Logo from "./Logo";
import NavButtons from "./NavButtons";

const Navbar = () => {
  return (
    <nav className="m-5 mx-8 flex items-center justify-between max-sm:mt-9 max-sm:flex-col">
      <Logo />
      <NavButtons />
    </nav>
  );
};

export default Navbar;
