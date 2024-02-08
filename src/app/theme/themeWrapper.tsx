"use client";

import { ReactNode } from "react";
import { useThemeStore } from "./store";

export default function ThemeWrapper({ children }: { children: ReactNode }) {

  const darkTheme = useThemeStore((state) => state.darkTheme)

  return (
    <div className={` flex-grow  flex flex-col min-h-screen ${darkTheme ? "dark" : ""}`}>
      {children}
    </div>
  );
}
