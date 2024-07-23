import React from "react";
import Logo from "./Logo";
import QuickLinks from "./QuickLinks";
import Languages from "./Languages";

const Sidebar = () => {
  return (
    <div className="flex h-screen w-[20%] flex-col gap-2 border-r p-5 pt-7">
      <Logo />
      <QuickLinks />
      <Languages />
    </div>
  );
};

export default Sidebar;
