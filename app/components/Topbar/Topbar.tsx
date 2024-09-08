import React from "react";
import ProfileUser from "./ProfileUser";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white p-3">
      <ProfileUser />
    </div>
  );
};

export default Topbar;
