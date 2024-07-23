"use client";
import { useGlobalContext } from "@/context/ContextApi";
import {
  BorderAll,
  DeleteOutlineOutlined,
  FavoriteBorder,
} from "@mui/icons-material";
import React from "react";

const QuickLinks = () => {
  const {
    sidebarMenuObject: { sidebarMenu },
  } = useGlobalContext();

  return (
    <div className="mt-20 text-sm">
      <div className="font-bold text-slate-400">Quick Links</div>
      <ul className="mt-4 flex flex-col gap-2 text-slate-400">
        <li className="flex w-3/5 items-center gap-1 rounded-md bg-primary p-[7px] px-2 text-white">
          <BorderAll sx={{ fontSize: 18 }} />
          <span>All Snippets</span>
        </li>
        <li className="flex w-3/5 items-center gap-1 rounded-md bg-primary p-[7px] px-2 hover:text-white">
          <FavoriteBorder sx={{ fontSize: 18 }} />
          <span>Favorites</span>
        </li>
        <li className="flex w-3/5 items-center gap-1 rounded-md bg-primary p-[7px] px-2 hover:text-white">
          <DeleteOutlineOutlined sx={{ fontSize: 18 }} />
          <span>Trash</span>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
