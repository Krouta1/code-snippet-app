"use client";
import { useGlobalContext } from "@/ContextApi";
import React from "react";

const DarkMode = () => {
  const {
    darkModeObject: { darkMode, setDarkMode },
  } = useGlobalContext();

  function handleDarkMode(id: number) {
    setDarkMode((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, isSelected: !item.isSelected };
        }
        return { ...item, isSelected: false };
      });
    });
  }

  return (
    <div className="flex h-[36px] w-[74px] items-center gap-2 rounded-3xl bg-slate-100 pl-[5px]">
      {darkMode.map((item) => (
        <div
          key={item.id}
          className={`flex h-7 w-7 cursor-pointer items-center gap-2 rounded-full p-1 transition-colors duration-500 ${
            item.isSelected
              ? "bg-purple-600 text-white"
              : "bg-slate-100 text-purple-600"
          }`}
          onClick={() => handleDarkMode(item.id)}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default DarkMode;
