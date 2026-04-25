import { create } from 'zustand';

type ThemeMode = 'light' | 'dark';

interface ThemeState {
  mode: ThemeMode;
  toggleTheme: () => void;
  setMode: (mode: ThemeMode) => void;
}

function applyTheme(mode: 'light' | 'dark') {
  const body = document.body;

  if (mode === 'dark') {
    body.setAttribute('theme-mode', 'dark');
  } else {
    body.removeAttribute('theme-mode');
  }
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  mode: 'light',

  setMode: (mode) => {
    applyTheme(mode);
    set({ mode });
  },

  toggleTheme: () => {
    const next = get().mode === 'light' ? 'dark' : 'light';
    applyTheme(next);
    set({ mode: next });
  },
}));