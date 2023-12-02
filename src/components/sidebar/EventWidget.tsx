import React from 'react';
import { styled } from 'styled-components';
import CalendarGroup from '@/src/components/calendar-group/CalendarGroup';
function EventWidget() {
  return (
    <Layout>
      <CalendarGroup />
    </Layout>
  );
}

export default EventWidget;

const Layout = styled.div`
  box-sizing: border-box;
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  padding: 0.25rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #e4ccff;
    border-radius: 50px;
  }

  scrollbar-color: #e4ccff;
  scrollbar-width: thin;
`;
