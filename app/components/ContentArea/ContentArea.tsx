"use client";
import React from "react";
import Topbar from "../Topbar/Topbar";
import { useGlobalContext } from "@/ContextApi";

const ContentArea = () => {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  return (
    <div
      className={`w-full bg-slate-100 p-5 ${darkMode[1].isSelected ? "bg-slate-700" : "bg-slate-100"}`}
    >
      <Topbar />
    </div>
  );
};

export default ContentArea;
