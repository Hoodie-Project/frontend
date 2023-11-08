import React from 'react';
import { useSidebarLocationStore } from '@/src/zustand/layout';
import { styled } from 'styled-components';
import Calendar from '@/src/components/calendar/Calendar';
import Sidebar from '@/src/components/sidebar/Sidebar';

function HomeLayout() {
  const { sidebarLocation } = useSidebarLocationStore.getState();
  return (
    <Layout $sidebarLocation={sidebarLocation}>
      <CalendarWrapper>
        <Calendar />
      </CalendarWrapper>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
    </Layout>
  );
}

export default HomeLayout;

const Layout = styled.div<{ $sidebarLocation: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-direction: ${props => (props.$sidebarLocation ? 'row-reverse' : 'row')};
  flex-wrap: nowrap;
`;

const CalendarWrapper = styled.div`
  display: flex;
  flex-basis: 0;
  flex-grow: 4.5;
`;

const SidebarWrapper = styled.div`
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
`;
