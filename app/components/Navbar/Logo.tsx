import React from "react";
import DataObjectIcon from "@mui/icons-material/DataObject";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className={`rounded-md bg-primary p-[6px]`}>
        <DataObjectIcon style={{ fontSize: 27, color: "white" }} />
      </div>
      <div className="flex gap-1 text-[19px]">
        <span className={`font-bold text-primary`}>Snippets</span>
        <span className="text-slate-400">Master</span>
      </div>
    </div>
  );
};

export default Logo;
