"use client";
import React, { createContext, ReactNode, useEffect } from "react";
import {
  BorderAll,
  DarkMode,
  DeleteOutlineOutlined,
  FavoriteBorder,
  LightMode,
  Logout,
} from "@mui/icons-material";
import { DarkModeType, SideBarMenu, SingleNoteType } from "./app/types/Types";

const testNotes: SingleNoteType[] = [
  {
    id: "1",
    title: "First Note",
    isFavorite: true,
    tags: ["tag1", "tag2"],
    description: "This is the first note description.",
    code: "console.log('Hello, world!');",
    language: "javascript",
    createdAt: "2023-10-01T10:00:00Z",
  },
  {
    id: "2",
    title: "Second Note",
    isFavorite: false,
    tags: ["tag3"],
    description: "This is the second note description.",
    code: "print('Hello, world!')",
    language: "python",
    createdAt: "2023-10-02T11:00:00Z",
  },
  {
    id: "3",
    title: "Third Note",
    isFavorite: true,
    tags: ["tag4", "tag5", "tag6"],
    description: "This is the third note description.",
    code: "<h1>Hello, world!</h1>",
    language: "html",
    createdAt: "2023-10-03T12:00:00Z",
  },
  {
    id: "4",
    title: "Fourth Note",
    isFavorite: false,
    tags: ["tag7"],
    description: "This is the fourth note description.",
    code: "SELECT * FROM users;",
    language: "sql",
    createdAt: "2023-10-04T13:00:00Z",
  },
  {
    id: " 5",
    title: "Fifth Note",
    isFavorite: true,
    tags: ["tag8", "tag9"],
    description: "This is the fifth note description.",
    code: "def hello_world():\n    print('Hello, world!')",
    language: "python",
    createdAt: "2023-10-05T14:00:00Z",
  },
];

interface GlobalContextType {
  sideBarMenuObject: {
    sideBarMenu: SideBarMenu[];
    setSideBarMenu: React.Dispatch<React.SetStateAction<SideBarMenu[]>>;
  };
  darkModeObject: {
    darkMode: DarkModeType[];
    setDarkMode: React.Dispatch<React.SetStateAction<DarkModeType[]>>;
  };
  openSidebarObject: {
    openSidebar: boolean;
    setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  };
  openContentNoteObject: {
    openContentNote: boolean;
    setOpenContentNote: React.Dispatch<React.SetStateAction<boolean>>;
  };
  isMobileObject: {
    isMobile: boolean;
    setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
  };
  allNotesObject: {
    allNotes: SingleNoteType[];
    setAllNotes: React.Dispatch<React.SetStateAction<SingleNoteType[]>>;
  };

  selectedNoteObject: {
    selectedNote: SingleNoteType | null;
    setSelectedNote: React.Dispatch<
      React.SetStateAction<SingleNoteType | null>
    >;
  };

  isNewNoteObject: {
    isNewNote: boolean;
    setIsNewNote: React.Dispatch<React.SetStateAction<boolean>>;
  };
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
  openSidebarObject: {
    openSidebar: false,
    setOpenSidebar: () => {},
  },
  openContentNoteObject: {
    openContentNote: false,
    setOpenContentNote: () => {},
  },
  isMobileObject: {
    isMobile: false,
    setIsMobile: () => {},
  },
  allNotesObject: {
    allNotes: [],
    setAllNotes: () => {},
  },
  selectedNoteObject: {
    selectedNote: null,
    setSelectedNote: () => {},
  },
  isNewNoteObject: {
    isNewNote: false,
    setIsNewNote: () => {},
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

  const [openSidebar, setOpenSidebar] = React.useState<boolean>(false);

  const [openContentNote, setOpenContentNote] = React.useState<boolean>(false);
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  const [allNotes, setAllNotes] = React.useState<SingleNoteType[]>(testNotes);
  const [selectedNote, setSelectedNote] = React.useState<SingleNoteType | null>(
    null,
  );
  const [isNewNoteObject, setIsNewNoteObject] = React.useState<boolean>(false);

  const handleResize = () => {
    if (window.innerWidth <= 640) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ContextProvider.Provider
      value={{
        sideBarMenuObject: { sideBarMenu, setSideBarMenu },
        darkModeObject: { darkMode, setDarkMode },
        openSidebarObject: { openSidebar, setOpenSidebar },
        openContentNoteObject: { openContentNote, setOpenContentNote },
        isMobileObject: { isMobile, setIsMobile },
        allNotesObject: { allNotes, setAllNotes },
        selectedNoteObject: { selectedNote, setSelectedNote },
        isNewNoteObject: {
          isNewNote: isNewNoteObject,
          setIsNewNote: setIsNewNoteObject,
        },
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
