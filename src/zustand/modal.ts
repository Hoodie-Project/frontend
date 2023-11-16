import { create } from 'zustand';

interface ModalState {
  isSidebarSettingModalOpen: boolean;
  openSidebarSettingModal: () => void;
  closeSidebarSettingModal: () => void;
}

export const useModalStore = create<ModalState>(set => ({
  isSidebarSettingModalOpen: false,
  openSidebarSettingModal: () => set({ isSidebarSettingModalOpen: true }),
  closeSidebarSettingModal: () => set({ isSidebarSettingModalOpen: false }),
}));
