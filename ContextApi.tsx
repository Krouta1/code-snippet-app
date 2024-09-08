"use client";
import React, { createContext, ReactNode } from "react";
import {
  BorderAll,
  DeleteOutlineOutlined,
  FavoriteBorder,
  Logout,
} from "@mui/icons-material";

interface GlobalContextType {
  sideBarMenuObject: {
    sideBarMenu: SideBarMenu[];
    setSideBarMenu: React.Dispatch<React.SetStateAction<SideBarMenu[]>>;
  };
}

interface SideBarMenu {
  id: number;
  name: string;
  isSelected: boolean;
  icons: ReactNode;
}

const ContextProvider = createContext<GlobalContextType | undefined>({
  sideBarMenuObject: {
    sideBarMenu: [],
    setSideBarMenu: () => {},
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

  return (
    <ContextProvider.Provider
      value={{
        sideBarMenuObject: { sideBarMenu, setSideBarMenu },
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
