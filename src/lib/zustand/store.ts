import { create } from "zustand";

type DarkModeState = {
  isDarkMode: boolean;
};

type DarkModeActions = {
  toggleDarkMode: () => void;
};

const useDarkModeStore = create<DarkModeState & DarkModeActions>((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export default useDarkModeStore;
