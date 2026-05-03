import { create } from "zustand";
import { getUserInfo } from "@/api/user";
import { SUCCESS_CODE } from "@/contants";

interface userState {
  userInfo: any
  fetchUserInfo: () => Promise<void>
  // 清除用户信息
  clearUserInfo: () => void
}

export const useUserStore = create<userState>()((set) => ({
  userInfo: null,
  fetchUserInfo: async () => {
    try {
      const res = await getUserInfo()
      if (res?.status_code === SUCCESS_CODE) {
        set({userInfo: res?.data})
      }
    } catch (error) {
      set({userInfo: null})
    }
  },
  clearUserInfo: () => {
    set({userInfo: null})
  }
}))