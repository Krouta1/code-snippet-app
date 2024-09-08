"use client";
import React, { createContext, ReactNode } from "react";
import {
  BorderAll,
  DarkMode,
  DeleteOutlineOutlined,
  FavoriteBorder,
  LightMode,
  Logout,
} from "@mui/icons-material";

interface GlobalContextType {
  sideBarMenuObject: {
    sideBarMenu: SideBarMenu[];
    setSideBarMenu: React.Dispatch<React.SetStateAction<SideBarMenu[]>>;
  };
  darkModeObject: {
    darkMode: DarkModeType[];
    setDarkMode: React.Dispatch<React.SetStateAction<DarkModeType[]>>;
  };
}

interface SideBarMenu {
  id: number;
  name: string;
  isSelected: boolean;
  icons: ReactNode;
}

interface DarkModeType {
  id: number;
  icon: ReactNode;
  isSelected: boolean;
}

const ContextProvider = createContext<GlobalContextType | undefined>({
  sideBarMenuObject: {
    sideBarMenu: [],
    setSideBarMenu: () => {},
  },
  darkModeObject: {
    darkMode: [],
    setDarkMode: () => {},
  },
});

export default function GlobalContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [sideBarMenu, setSideBarMenu] = React.useState<SideBarMenu[]>([
    {
      id: 1,
      name: "All snippets",
      isSelected: true,
      icons: <BorderAll sx={{ fontSize: 18 }} />,
    },
    {
      id: 2,
      name: "Favorites",
      isSelected: false,
      icons: <FavoriteBorder sx={{ fontSize: 18 }} />,
    },
    {
      id: 3,
      name: "Trash",
      isSelected: false,
      icons: <DeleteOutlineOutlined sx={{ fontSize: 18 }} />,
    },
    {
      id: 4,
      name: "Logout",
      isSelected: false,
      icons: <Logout sx={{ fontSize: 18 }} />,
    },
  ]);

  const [darkMode, setDarkMode] = React.useState<DarkModeType[]>([
    {
      id: 1,
      icon: <LightMode sx={{ fontSize: 18 }} />,
      isSelected: true,
    },
    {
      id: 2,
      icon: <DarkMode sx={{ fontSize: 18 }} />,
      isSelected: false,
    },
  ]);

  return (
    <ContextProvider.Provider
      value={{
        sideBarMenuObject: { sideBarMenu, setSideBarMenu },
        darkModeObject: { darkMode, setDarkMode },
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
}

export const useGlobalContext = () => {
  const context = React.useContext(ContextProvider);

  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider",
    );
  }

  return context;
};
