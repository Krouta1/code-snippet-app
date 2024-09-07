import React from "react";
import { SiCplusplus, SiJavascript, SiPython } from "react-icons/si";

const Languages = () => {
  return (
    <div className="mt-20 text-sm">
      <div className="font-bold text-slate-400">Languages</div>
      <div className="ml-2 mt-5 flex flex-col gap-4 text-slate-400">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <SiJavascript />
            Javascript
          </div>
          <span className="font-bold">8</span>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <SiPython />
            Python
          </div>
          <span className="font-bold">8</span>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <SiCplusplus />
            C++
          </div>
          <span className="font-bold">8</span>
        </div>
      </div>
    </div>
  );
};

export default Languages;
