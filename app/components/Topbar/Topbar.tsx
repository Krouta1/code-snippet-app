import React from "react";
import ProfileUser from "./ProfileUser";
import SearchBar from "./SearchBar";
import DarkMode from "./DarkMode";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white p-3">
      <ProfileUser />
      <SearchBar />
      <DarkMode />
    </div>
  );
};

export default Topbar;
