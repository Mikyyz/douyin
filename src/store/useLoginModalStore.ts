import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const LOGIN_MODAL_OPEN_KEY = "login-modal-open";

interface LoginModalState {
  modalConfig: Record<string, string | number | boolean>;
  isLoginModalOpen: boolean;
  loginModalTitle: string;
  setModalConfig: (config: Record<string, string | number | boolean>) => void;
  openLoginModal: (loginModalTitle: string) => void;
  closeLoginModal: () => void;
}

export const useLoginModalStore = create<LoginModalState>()(
  persist(
    (set, get) => ({
      isLoginModalOpen: false,
      loginModalTitle: "登录",
      modalConfig: {
        mask: true,
        showCloseIcon: true,
      },
      setModalConfig: (config: Record<string, string | number | boolean>) =>
        set({ modalConfig: config }),
      openLoginModal: (loginModalTitle = "登录") =>
        set({ isLoginModalOpen: true, loginModalTitle }),
      closeLoginModal: () => set({ isLoginModalOpen: false }),
    }),
    {
      name: LOGIN_MODAL_OPEN_KEY,
      storage: createJSONStorage(() => localStorage),
    }
  )
);
