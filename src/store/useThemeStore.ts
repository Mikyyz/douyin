import { create } from 'zustand';
import { ThemeMode, ThemeState } from '@/types';
import { createJSONStorage, persist } from 'zustand/middleware';

const LOCAL_STORAGE_THEME_KEY = 'theme-mode'

function applyTheme(mode: ThemeMode) {
  document.body.setAttribute('theme-mode', mode)
}

export const useThemeStore = create<ThemeState>()(persist(
  (set) => ({
    mode: 'light',
    setMode: (mode: ThemeMode) => {
      applyTheme(mode)
      set({ mode })
    },
    toggleThemeMode: (mode: ThemeMode) => {
      applyTheme(mode)
      set({ mode })
    },
}),
  {
    name: LOCAL_STORAGE_THEME_KEY,
    storage: createJSONStorage(() => localStorage),
    onRehydrateStorage: () => (state) => {
      if (state?.mode) {
        applyTheme(state.mode)
      }
    },
  }))