"use client";
import React from "react";
import Topbar from "../Topbar/Topbar";
import { useGlobalContext } from "@/ContextApi";
import SwiperSelection from "./SwiperSelection";
import AllNotesSection from "./AllNotesSection";
import ContentNote from "../ContentNote/ContentNote";

const ContentArea = () => {
  const {
    darkModeObject: { darkMode },
    openContentNoteObject: { openContentNote },
    isMobileObject: { isMobile },
  } = useGlobalContext();

  return (
    <div
      className={`h-full w-full bg-slate-100 p-5 ${darkMode[1].isSelected ? "bg-slate-700" : "bg-slate-100"}`}
    >
      <Topbar />
      <div className="mt-5 flex gap-2 rounded-md border p-2">
        <div
          className={`${openContentNote ? (isMobile ? "w-full" : "w-1/2") : "w-full"}`}
        >
          <SwiperSelection />
          <AllNotesSection />
        </div>
        <ContentNote />
      </div>
    </div>
  );
};

export default ContentArea;
