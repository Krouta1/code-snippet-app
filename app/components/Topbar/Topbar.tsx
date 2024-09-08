"use client";
import React from "react";
import ProfileUser from "./ProfileUser";
import SearchBar from "./SearchBar";
import DarkMode from "./DarkMode";
import { useGlobalContext } from "@/ContextApi";
import SidebarMenuIcon from "./SidebarMenuIcon";

const Topbar = () => {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  return (
    <div
      className={`flex items-center justify-between rounded-lg p-3 ${darkMode[1].isSelected ? "bg-slate-800 text-white" : "bg-white"}`}
    >
      <ProfileUser />
      <SearchBar />
      <div className="flex items-center gap-4">
        <DarkMode />
        <SidebarMenuIcon />
      </div>
    </div>
  );
};

export default Topbar;
