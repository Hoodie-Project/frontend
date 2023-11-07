import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TMyPersist } from 'myPersist';

interface ISidebarLocationStore {
  sidebarLocation: boolean; // true이면 왼쪽, false이면 오른쪽
  toggleSidebarLocation: () => void;
}

export const useSidebarLocationStore = create<ISidebarLocationStore>(
  (persist as TMyPersist<ISidebarLocationStore>)(
    set => ({
      sidebarLocation: false,
      toggleSidebarLocation: () => set(state => ({ sidebarLocation: !state.sidebarLocation })),
    }),
    {
      name: 'sidebar-location-storage',
      getStorage: () => localStorage,
    },
  ),
);
