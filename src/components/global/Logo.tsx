import DataObjectIcon from "@mui/icons-material/DataObject";
import React from "react";

type LogoProps = {};

const Logo = (props: LogoProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-primary rounded-md p-[6px]">
        <DataObjectIcon sx={{ fontSize: 27, color: "white" }} />
      </div>
      <div className="flex gap-1 text-[19px]">
        <span className="text-primary font-bold">Snippet</span>
        <span className="text-slate-600">Master</span>
      </div>
    </div>
  );
};

export default Logo;
