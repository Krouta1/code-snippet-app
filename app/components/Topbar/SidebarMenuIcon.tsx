"use client";
import { useGlobalContext } from "@/ContextApi";
import { CloseOutlined, MenuOutlined } from "@mui/icons-material";
import React from "react";

const SidebarMenuIcon = () => {
  const {
    openSidebarObject: { openSidebar, setOpenSidebar },
  } = useGlobalContext();

  return (
    <>
      {openSidebar ? (
        <MenuOutlined
          className="hidden cursor-pointer text-slate-500 max-md:block"
          onClick={() => setOpenSidebar((prev) => !prev)}
        />
      ) : (
        <CloseOutlined
          className="hidden cursor-pointer text-slate-500 max-md:block"
          onClick={() => setOpenSidebar((prev) => !prev)}
        />
      )}
    </>
  );
};

export default SidebarMenuIcon;
