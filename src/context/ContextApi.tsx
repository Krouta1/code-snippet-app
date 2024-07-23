"use client";
import {
  BorderAll,
  DeleteOutlineOutlined,
  FavoriteBorder,
} from "@mui/icons-material";
import React, { useContext, createContext } from "react";

interface GlobalContextProps {
  sidebarMenuObject: {
    sidebarMenu: SideBarMenu[];
    setSidebarMenu: React.Dispatch<React.SetStateAction<SideBarMenu[]>>;
  };
}

interface SideBarMenu {
  id: number;
  name: string;
  icon: React.ReactNode;
  isSelected: boolean;
}

const GlobalContext = createContext<GlobalContextProps>({
  sidebarMenuObject: {
    sidebarMenu: [],
    setSidebarMenu: () => {},
  },
});

export default function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarMenu, setSidebarMenu] = React.useState<SideBarMenu[]>([
    {
      id: 1,
      name: "All Snippets",
      icon: <BorderAll />,
      isSelected: true,
    },
    {
      id: 2,
      name: "Favorites",
      icon: <FavoriteBorder />,
      isSelected: false,
    },
    {
      id: 3,
      name: "Trash",
      icon: <DeleteOutlineOutlined />,
      isSelected: false,
    },
  ]);

  return (
    <GlobalContext.Provider
      value={{
        sidebarMenuObject: {
          sidebarMenu,
          setSidebarMenu,
        },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider",
    );
  }
  return context; // Return the context
};
