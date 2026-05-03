import { create } from "zustand";
import { useUserStore } from "./useUserStore";
import { useLoginStore } from "./useLoginStore";

interface AppState {
  initializing: boolean;
  initApp: () => Promise<void>;
  resetApp: () => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  initializing: false,

  initApp: async () => {
    if (get().initializing) {
      return;
    }
    set({ initializing: true });
    await Promise.all([
      // 获取用户信息
      useUserStore.getState().fetchUserInfo(),
      // usePermissionStore.getState().fetchPermissions(),
      // useFeedStore.getState().fetchFeedList(),
    ]);
  },
  resetApp: () => {
    set({ initializing: false });
  },
}));