import { SingleNoteType } from "@/app/types/Types";
import { useGlobalContext } from "@/ContextApi";
import { DeleteRounded, FavoriteBorderOutlined } from "@mui/icons-material";
import React from "react";
import { SiJavascript } from "react-icons/si";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  materialLight,
  oneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  language: string;
  code: string;
}

const SingleNote = ({ note }: { note: SingleNoteType }) => {
  const {
    darkModeObject: { darkMode },
    openContentNoteObject: { openContentNote },
  } = useGlobalContext();

  const { tags, description, code, language, createdAt } = note;

  return (
    <div
      className={`${darkMode[1].isSelected ? "bg-slate-800 text-white" : "bg-white"} ${openContentNote ? "w-full" : "w-[360px]"} rounded-md px-2 py-4 shadow-md max-sm:w-full`}
    >
      <NoteHeader note={note} />
      <NoteDate date={createdAt} />
      <NoteTags tags={tags} />
      <NoteDescription description={description} />
      <CodeBlock language={language} code={code} />
      <NoteFooter language={language} />
    </div>
  );
};

function NoteHeader({ note }: { note: SingleNoteType }) {
  const {
    openContentNoteObject: { setOpenContentNote },
    selectedNoteObject: { setSelectedNote },
  } = useGlobalContext();

  return (
    <div
      className="mx-4 flex cursor-pointer justify-between"
      onClick={() => {
        setOpenContentNote((prev) => !prev);
        setSelectedNote(note);
      }}
    >
      <span className="w-[87%] text-lg font-bold">{note.title}</span>
      <FavoriteBorderOutlined className="cursor-pointer text-slate-400" />
    </div>
  );
}
function NoteDate({ date }: { date: string }) {
  return (
    <div className="mx-4 mt-1 flex gap-1 text-[11px] font-light text-slate-500">
      <span>{date}</span>
    </div>
  );
}
function NoteTags({ tags }: { tags: string[] }) {
  return (
    <div className="mx-4 mt-4 flex flex-wrap gap-1 text-[11px] text-slate-500">
      {tags.map((tag, index) => {
        return (
          <span
            key={index + tag}
            className="rounded-md bg-purple-100 p-1 px-2 text-primary"
          >
            {tag}
          </span>
        );
      })}
    </div>
  );
}
function NoteDescription({ description }: { description: string }) {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <div
      className={`${darkMode[1].isSelected ? "text-slate-300" : ""} mx-4 mt-4 text-[13px] text-slate-600`}
    >
      {description}
    </div>
  );
}
function CodeBlock({ language, code }: CodeBlockProps) {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  return (
    <div className="overflow-hidden rounded-md text-sm">
      <SyntaxHighlighter
        language={language}
        style={darkMode[1].isSelected ? oneDark : materialLight}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
function NoteFooter({ language }: { language: string }) {
  return (
    <div className="mx-4 mt-3 flex items-center justify-between text-[13px] text-slate-400">
      <div className="flex items-center gap-1">
        <SiJavascript size={15} className="mb-[2px]" />
        <span>{language}</span>
      </div>
      <DeleteRounded sx={{ fontSize: 17 }} className="cursor-pointer" />
    </div>
  );
}

export default SingleNote;
