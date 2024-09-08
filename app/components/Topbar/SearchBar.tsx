import React from "react";
import Search from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <div className="relative flex h-[38px] w-3/5 items-center gap-2 rounded-3xl bg-slate-100 pl-3">
      <Search className="text-purple-500" />
      <input
        type="text"
        placeholder="Search snippet..."
        className="w-[70%] bg-slate-100 text-sm text-slate-500 outline-none"
      />
      <AddSnippetButton />
    </div>
  );
};

function AddSnippetButton() {
  return (
    <div className="absolute right-[6px] top-[5px] flex cursor-pointer select-none items-center gap-2 rounded-3xl bg-purple-600 p-1 px-3 text-[13px] text-white">
      <div className="font-bold">+</div>
      <div>Snippet</div>
    </div>
  );
}

export default SearchBar;
