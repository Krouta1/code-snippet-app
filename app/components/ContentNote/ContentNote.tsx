"use client";
import { SingleNoteType } from "@/app/types/Types";
import { useGlobalContext } from "@/ContextApi";
import {
  Close,
  EditOutlined,
  StyleOutlined,
  TitleOutlined,
} from "@mui/icons-material";
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
        <>
          <ContentNoteHeader
            singleNote={singleNote}
            setSingleNote={setSingleNote}
          />
          <NoteTags singleNote={singleNote} setSingleNote={setSingleNote} />
        </>
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
    isNewNoteObject: { setIsNewNote },
    openContentNoteObject: { setOpenContentNote },
  } = useGlobalContext();
  const [hovered, setHovered] = useState(false);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  function onUpdateTitle(event: React.ChangeEvent<HTMLTextAreaElement>) {
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

  //prevent adding new line on enter
  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }

  return (
    <div className="mb-4 flex items-center justify-between gap-8">
      <div className="flex w-full gap-2">
        <TitleOutlined
          sx={{ fontSize: 19 }}
          className={` ${hovered ? "text-primary" : "text-slate-400"} mt-[4px]`}
        />
        <textarea
          placeholder="New title"
          ref={textareaRef}
          value={singleNote?.title}
          onChange={onUpdateTitle}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onBlur={() => setHovered(false)}
          onFocus={() => setHovered(true)}
          className="h-auto w-full resize-none overflow-hidden text-xl font-bold outline-none"
        />
        <Close
          sx={{ fontSize: 18, cursor: "pointer" }}
          className="mt-[7px] cursor-pointer text-slate-400"
          onClick={() => {
            setIsNewNote(false);
            setOpenContentNote(false);
          }}
        />
      </div>
    </div>
  );
}

function NoteTags({
  singleNote,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setSingleNote,
}: {
  singleNote: SingleNoteType | undefined;
  setSingleNote: React.Dispatch<
    React.SetStateAction<SingleNoteType | undefined>
  >;
}) {
  const [hovered, setHovered] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (isOpened) {
      setHovered(true);
    }
  }, [isOpened]);

  return (
    <div className="flex items-center gap-2 text-[13px]">
      <StyleOutlined
        sx={{ fontSize: 19 }}
        className={` ${hovered ? "text-primary" : "text-slate-400"}`}
      />
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          if (!isOpened) setHovered(false);
        }}
        className="relative flex w-full justify-between"
      >
        <div className="flex select-none flex-wrap items-center gap-2">
          {singleNote?.tags.length === 0 && (
            <div>
              <span className="rounded-md bg-slate-100 p-1 px-2 text-slate-400">
                No Tags
              </span>
            </div>
          )}
          {singleNote?.tags.map((tag, index) => (
            <div
              key={index + tag}
              className="rounded-md bg-slate-200 px-2 py-1 text-slate-400"
            >
              {tag}
            </div>
          ))}
          {hovered && (
            <EditOutlined
              sx={{ fontSize: 19 }}
              className="cursor-pointer text-slate-400"
              onClick={() => setIsOpened((prev) => !prev)}
            />
          )}
        </div>
        {isOpened && <TagsMenu />}
      </div>
    </div>
  );
}

function TagsMenu() {
  const tags = [
    { _id: "1", name: "Personal" },
    { _id: "2", name: "Work" },
    { _id: "3", name: "School" },
    { _id: "4", name: "Home" },
    { _id: "5", name: "Others" },
  ];

  return (
    <ul className="absolute top-10 flex w-3/5 flex-col gap-2 rounded-md bg-slate-100 p-3">
      {tags.map((tag) => (
        <li
          key={tag._id}
          className="px2 cursor-pointer select-none rounded-md p-1 text-slate-500 transition-all hover:bg-slate-300"
        >
          {tag.name}
        </li>
      ))}
    </ul>
  );
}
