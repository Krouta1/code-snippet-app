"use client";
import { SingleNoteType } from "@/app/types/Types";
import { useGlobalContext } from "@/ContextApi";
import React, { useEffect, useState } from "react";

const ContentNote = () => {
  const {
    openContentNoteObject: { openContentNote, setOpenContentNote },
    darkModeObject: { darkMode },
    isMobileObject: { isMobile },
    selectedNoteObject: { selectedNote },
    isNewNoteObject: { setIsNewNote, isNewNote },
    allNotesObject: { allNotes, setAllNotes },
  } = useGlobalContext();

  const [singleNote, setSingleNote] = useState<SingleNoteType | undefined>(
    undefined,
  );

  useEffect(() => {
    if (openContentNote) {
      if (selectedNote) {
        setSingleNote(selectedNote);
      }
    }
  }, [selectedNote, openContentNote]);

  useEffect(() => {
    if (isNewNote) {
      if (singleNote && singleNote.title !== "") {
        setAllNotes([...allNotes, singleNote]);
        setIsNewNote(false);
      }
    }
  }, [singleNote, isNewNote, setAllNotes, allNotes, setIsNewNote]);

  console.log("Selected Note:", selectedNote);

  return (
    <div
      className={`w-1/2 rounded-md border ${darkMode[1].isSelected ? "bg-slate-700" : "bg-white"} p-3 ${openContentNote ? "block" : "hidden"} h-screen ${isMobile ? "absolute left-1/2 top-1/2 z-50 w-4/5 -translate-x-1/2 -translate-y-1/2" : ""}`}
    >
      {singleNote && (
        <ContentNoteHeader
          singleNote={singleNote}
          setSingleNote={setSingleNote}
        />
      )}
      <div onClick={() => setOpenContentNote((prev) => !prev)}>close</div>
    </div>
  );
};

export default ContentNote;

function ContentNoteHeader({
  singleNote,
  setSingleNote,
}: {
  singleNote: SingleNoteType | undefined;
  setSingleNote: React.Dispatch<
    React.SetStateAction<SingleNoteType | undefined>
  >;
}) {
  const {
    allNotesObject: { allNotes, setAllNotes },
  } = useGlobalContext();

  function onUpdateTitle(event: React.ChangeEvent<HTMLInputElement>) {
    const newSingleNote = {
      ...singleNote,
      title: event.target.value,
    } as SingleNoteType;
    setSingleNote(newSingleNote);

    const newAllNotes = allNotes.map((note) => {
      if (singleNote && note.id === singleNote.id) {
        return newSingleNote;
      }
      return note;
    });
    setAllNotes(newAllNotes);
  }

  return (
    <input
      type="text"
      placeholder="New title"
      value={singleNote?.title}
      onChange={onUpdateTitle}
    />
  );
}
