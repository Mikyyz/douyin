import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const LOCAL_STORAGE_TOKEN_KEY = "login-token";

interface LoginState {
  token: string;
  isLogin: boolean;
  setLogin: (token: string, isLogin: boolean) => void;
  logout: () => void;
}

export const useLoginStore = create<LoginState>()(
  persist(
    (set) => ({
      token: "",
      isLogin: false,
      setLogin: (token: string, isLogin: boolean) => set({ token, isLogin }),
      logout: () => set({ token: "", isLogin: false }),
    }),
    {
      name: LOCAL_STORAGE_TOKEN_KEY,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
