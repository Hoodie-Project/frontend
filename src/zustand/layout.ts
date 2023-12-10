import { create } from 'zustand';
import { SidebarWidgetState } from '@/src/models/layout';
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

export const useSidebarStore = create<SidebarWidgetState>(
  (persist as TMyPersist<SidebarWidgetState>)(
    set => ({
      widgets: [
        { id: 'event', type: 'EventWidget', size: 'l', label: '이벤트 관리 위젯', isVisible: true },
        { id: 'plan', type: 'PlanWidget', size: 'm', label: '연/월/주 단위 계획 관리 위젯', isVisible: true },
        { id: 'affirmation', type: 'AffirmWidget', size: 's', label: '자기 확언 위젯', isVisible: true },
      ],
      setWidgets: widgets => set({ widgets }),
    }),
    {
      name: 'sidebar-widgets',
      getStorage: () => localStorage,
    },
  ),
);
// 내가 원하는대로 동작하지 않는 것 같아. checked가 true인 것들의 Id값이 같은 녀석들
