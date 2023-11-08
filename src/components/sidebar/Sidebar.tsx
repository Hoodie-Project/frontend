import React from 'react';
import { styled } from 'styled-components';
import MonthlyCalendar from '@/src/components/calendar/MonthlyCalendar';
import Copyright from '@/src/components/common/Copyright';

function Sidebar() {
  return (
    <Layout>
      <MonthlyCalendar type='mini' />
      <Copyright />
    </Layout>
  );
}

export default Sidebar;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
`;
