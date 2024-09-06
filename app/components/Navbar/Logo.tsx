import React from "react";
import DataObjectIcon from "@mui/icons-material/DataObject";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className={`bg-primary rounded-md p-[6px]`}>
        <DataObjectIcon style={{ fontSize: 27, color: "white" }} />
      </div>
      <div className="flex gap-1 text-[19px]">
        <span className={`text-primary font-bold`}>Snippets</span>
        <span className="text-slate-600">Master</span>
      </div>
    </div>
  );
};

export default Logo;
