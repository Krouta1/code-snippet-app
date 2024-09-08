"use client";
import { useGlobalContext } from "@/ContextApi";
import React from "react";

const QuickLinks = () => {
  const {
    sideBarMenuObject: { sideBarMenu, setSideBarMenu },
  } = useGlobalContext();

  function handleMenuClick(id: number) {
    const newMenu = sideBarMenu.map((menu) => {
      if (menu.id === id) {
        return { ...menu, isSelected: true };
      }
      return { ...menu, isSelected: false };
    });
    setSideBarMenu(newMenu);
  }

  return (
    <div className="mt-20 text-sm">
      <div className="font-bold text-slate-400">Quick Links</div>
      <ul className="mt-4 flex flex-col gap-2 text-slate-400">
        {sideBarMenu.map((menu) => (
          <li
            onClick={() => handleMenuClick(menu.id)}
            key={menu.id}
            className={`flex w-3/5 cursor-pointer items-center gap-1 rounded-md p-[7px] ${
              menu.isSelected
                ? "bg-primary text-white"
                : "hover:bg-primary hover:text-white"
            }`}
          >
            {menu.icons}
            <span>{menu.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
