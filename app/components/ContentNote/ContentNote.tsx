import { useGlobalContext } from "@/ContextApi";
import React from "react";

const ContentNote = () => {
  const {
    openContentNoteObject: { openContentNote, setOpenContentNote },
    darkModeObject: { darkMode },
    isMobileObject: { isMobile },
  } = useGlobalContext();

  return (
    <div
      className={`w-1/2 rounded-md border ${darkMode[1].isSelected ? "bg-slate-700" : "bg-white"} p-3 ${openContentNote ? "block" : "hidden"} h-screen ${isMobile ? "absolute left-1/2 top-1/2 z-50 w-4/5 -translate-x-1/2 -translate-y-1/2" : ""}`}
    >
      ContentNote
      <div onClick={() => setOpenContentNote((prev) => !prev)}>close</div>
    </div>
  );
};

export default ContentNote;
