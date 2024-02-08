"use client";

import { useThemeStore } from "./store"

export default function ThemeToggle() {

  const toggle = useThemeStore(state => state.toggleTheme)


  return <button onClick={toggle} >
    Zustand toggle
  </button>
}

