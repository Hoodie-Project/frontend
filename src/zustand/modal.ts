import { create } from 'zustand';

interface ModalState {
  isSidebarSettingModalOpen: boolean;
  openSidebarSettingModal: () => void;
  closeSidebarSettingModal: () => void;

  isCreateEventModalOpen: boolean;
  openCreateEventModal: () => void;
  closeCreateEventModal: () => void;

  isRepeatSettingModalOpen: boolean;
  openRepeatSettingModal: () => void;
  closeRepeatSettingModal: () => void;

  createEventModalPosition: { x: number; y: number };
  setCreateEventModalPosition: (position: { x: number; y: number }) => void;
}

export const useModalStore = create<ModalState>(set => ({
  isSidebarSettingModalOpen: false,
  openSidebarSettingModal: () => set({ isSidebarSettingModalOpen: true }),
  closeSidebarSettingModal: () => set({ isSidebarSettingModalOpen: false }),

  isCreateEventModalOpen: false,
  openCreateEventModal: () => set({ isCreateEventModalOpen: true }),
  closeCreateEventModal: () => set({ isCreateEventModalOpen: false }),

  isRepeatSettingModalOpen: false,
  openRepeatSettingModal: () => set({ isRepeatSettingModalOpen: true }),
  closeRepeatSettingModal: () => set({ isRepeatSettingModalOpen: false }),

  createEventModalPosition: { x: 0, y: 0 },
  setCreateEventModalPosition: position => set({ createEventModalPosition: position }),
}));
