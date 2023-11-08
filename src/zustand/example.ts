import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TMyPersist } from 'myPersist';

interface ScrappedState {
  scrappedIds: string[];
  addScrap: (id: string) => void;
  removeScrap: (id: string) => void;
}

export const useScrappedStore = create<ScrappedState>(
  (persist as TMyPersist<ScrappedState>)(
    set => ({
      scrappedIds: [],
      addScrap: (id: string) =>
        set((state: ScrappedState) => ({
          scrappedIds: [...state.scrappedIds, id],
        })),
      removeScrap: (id: string) =>
        set((state: ScrappedState) => ({
          scrappedIds: state.scrappedIds.filter((prevId: string) => prevId !== id),
        })),
    }),
    {
      name: 'scrapped-storage',
    },
  ),
);
