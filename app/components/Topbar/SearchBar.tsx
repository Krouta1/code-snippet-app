"use client";
import React from "react";
import Search from "@mui/icons-material/Search";
import { useGlobalContext } from "@/ContextApi";
import { SingleNoteType } from "@/app/types/Types";
import { v4 as uuidv4 } from "uuid";
const SearchBar = () => {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  return (
    <div
      className={`relative flex h-[38px] w-3/5 items-center gap-2 rounded-3xl bg-slate-100 pl-3 ${darkMode[1].isSelected ? "bg-slate-700" : "bg-slate-100"}`}
    >
      <Search className="text-purple-500" />
      <input
        type="text"
        placeholder="Search snippet..."
        className={`w-[70%] text-sm text-slate-500 outline-none ${darkMode[1].isSelected ? "bg-slate-700" : "bg-slate-100"}`}
      />
      <AddSnippetButton />
    </div>
  );
};

function AddSnippetButton() {
  const {
    openContentNoteObject: { setOpenContentNote },
    selectedNoteObject: { setSelectedNote },
    // allNotesObject: { allNotes, setAllNotes },
    isNewNoteObject: { setIsNewNote },
  } = useGlobalContext();

  function openTheContentNote() {
    const newSingleNote: SingleNoteType = {
      id: uuidv4(),
      title: "",
      description: "",
      isFavorite: false,
      tags: [],
      createdAt: new Date().toISOString(),
      code: "",
      language: "",
    };
    setIsNewNote(true);
    setSelectedNote(newSingleNote);
    setOpenContentNote(true);
  }

  return (
    <div
      className="absolute right-[6px] top-[5px] flex cursor-pointer select-none items-center gap-2 rounded-3xl bg-purple-600 p-1 px-3 text-[13px] text-white"
      onClick={openTheContentNote}
    >
      <div className="font-bold">+</div>
      <div className="max-md:hidden">Snippet</div>
    </div>
  );
}

export default SearchBar;
