import { create } from "zustand";
import { ActiveSource } from "@/types";

interface FeedStore {
  activeId: string | null
  source: ActiveSource
  hoverLock: boolean
  setActive: (id: string | null, source: ActiveSource) => void
  clearActive: (source?: ActiveSource) => void
  lockHover: () => void
  unlockHover: () => void
}

export const useFeedStore = create<FeedStore>((set, get) => ({
  activeId: "7628631952467217683",
  source: null,
  hoverLock: false,
  setActive: (id, source) => {
    const { hoverLock } = get();
    // hover 锁期间，禁止被 inview 抢占
    if (hoverLock && source === 'inview') {
      return;
    }
    set({ activeId: id, source });
  },
  clearActive: (source) =>  {
    const current = get().source;
    if (source && current !== source) {
      return;
    }
    set({ activeId: null, source: null });
  },
  lockHover: () => set({ hoverLock: true }),
  unlockHover: () => set({ hoverLock: false }),
}))