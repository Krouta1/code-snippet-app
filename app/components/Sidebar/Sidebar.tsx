"use client";
import React from "react";
import Logo from "../Navbar/Logo";
import QuickLinks from "./QuickLinks";
import Languages from "./Languages";
import { useGlobalContext } from "@/ContextApi";

const Sidebar = () => {
  const {
    darkModeObject: { darkMode },
    openSidebarObject: { openSidebar },
  } = useGlobalContext();

  return (
    <div
      className={`flex h-screen flex-col gap-2 border-r p-6 pr-20 pt-7 ${openSidebar ? "fixed z-50 shadow-lg" : "max-md:hidden"} ${darkMode[1].isSelected ? "bg-slate-800" : "bg-white"}`}
    >
      <Logo />
      <QuickLinks />
      <Languages />
    </div>
  );
};

export default Sidebar;
