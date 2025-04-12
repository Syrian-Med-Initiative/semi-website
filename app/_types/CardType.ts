import { ReactNode } from "react";

export interface CardData {
  imageUrl: string;
  title: string;
  date?: string;
  time?: string;
  location?: string;
  description: string;
  onRegister?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icons?: ReactNode[];
}