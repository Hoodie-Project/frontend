import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TMyPersist } from 'myPersist';

interface AuthStore {
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthStore>(
  (persist as TMyPersist<AuthStore>)(
    set => ({
      accessToken: null,
      setAccessToken: token => set({ accessToken: token }),
      clearAuth: () => set({ accessToken: null }),
    }),
    {
      name: 'auth-storage',
    },
  ),
);
