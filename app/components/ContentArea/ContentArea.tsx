"use client";
import React from "react";
import Topbar from "../Topbar/Topbar";
import { useGlobalContext } from "@/ContextApi";
import SwiperSelection from "./SwiperSelection";

const ContentArea = () => {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  return (
    <div
      className={`h-screen w-full bg-slate-100 p-5 ${darkMode[1].isSelected ? "bg-slate-700" : "bg-slate-100"}`}
    >
      <Topbar />
      <SwiperSelection />
    </div>
  );
};

export default ContentArea;
