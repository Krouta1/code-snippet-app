import { ReactNode } from "react";

export interface SingleNoteType {
  id: number;
  title: string;
  isFavorite: boolean;
  tags: string[];
  description: string;
  code: string;
  language: string;
  createdAt: string;
}

export interface SideBarMenu {
  id: number;
  name: string;
  isSelected: boolean;
  icons: ReactNode;
}

export interface DarkModeType {
  id: number;
  icon: ReactNode;
  isSelected: boolean;
}
