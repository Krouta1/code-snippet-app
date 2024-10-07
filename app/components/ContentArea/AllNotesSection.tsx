import React from "react";
import SingleNote from "./SingleNote";
import { useGlobalContext } from "@/ContextApi";

const AllNotesSection = () => {
  const {
    openContentNoteObject: { openContentNote },
    allNotesObject: { allNotes },
  } = useGlobalContext();

  return (
    <div
      className={`mt-5 flex ${openContentNote ? "flex-col" : "flex-wrap"} gap-4`}
    >
      {allNotes.map((note) => {
        return <SingleNote key={note.id} note={note} />;
      })}
    </div>
  );
};

export default AllNotesSection;
