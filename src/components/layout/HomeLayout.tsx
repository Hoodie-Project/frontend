import React from 'react';
import { useSidebarLocationStore } from '@/src/zustand/layout';
import { styled } from 'styled-components';

function HomeLayout() {
  const { sidebarLocation } = useSidebarLocationStore.getState();
  return (
    <Layout $sidebarLocation={sidebarLocation}>
      <CalendarWrapper>Calendar</CalendarWrapper>
      <SidebarWrapper>Sidebar</SidebarWrapper>
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
  flex-wrap: wrap;
`;

const CalendarWrapper = styled.div`
  display: flex;
  flex-grow: 4.5;
  // layout 확인 용도
  border: solid 1px red;
`;

const SidebarWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  // layout 확인 용도
  border: solid 1px blue;
`;
