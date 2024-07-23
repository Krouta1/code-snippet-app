import React from "react";
import { SiCplusplus, SiJavascript, SiPython } from "react-icons/si";

const Languages = () => {
  return (
    <div className="mt-12 text-sm">
      <div className="font-bold text-slate-400">Languages</div>
      <div className="mt-5 flex flex-col gap-4 text-slate-400">
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <SiJavascript size={15} /> Javascript
          </div>
          <span className="font-bold">3</span>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-4 text-slate-400">
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <SiPython size={15} /> Python
          </div>
          <span className="font-bold">3</span>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-4 text-slate-400">
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <SiCplusplus size={15} /> C++
          </div>
          <span className="font-bold">3</span>
        </div>
      </div>
    </div>
  );
};

export default Languages;
