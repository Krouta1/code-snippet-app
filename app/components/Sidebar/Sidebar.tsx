import React from "react";
import Logo from "../Navbar/Logo";
import QuickLinks from "./QuickLinks";
import Languages from "./Languages";

const Sidebar = () => {
  return (
    <div className="flex h-screen w-1/5 flex-col gap-2 border-r p-5 pt-7">
      <Logo />
      <QuickLinks />
      <Languages />
    </div>
  );
};

export default Sidebar;
