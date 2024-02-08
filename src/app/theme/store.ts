import { create } from 'zustand';

type ThemeState = {
  darkTheme: boolean;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  darkTheme: false, // default to light theme
  toggleTheme: () => set((state) => ({ darkTheme: !state.darkTheme })),
}));
