import React from 'react';
import { styled } from 'styled-components';
import MonthlyCalendar from './MonthlyCalendar';

// TODO 최종 containers에 dynamic으로 렌더링되는 캘린더는 해당 컴포넌트
// TODO 해당 컴포넌트에서 주단위, 월단위 스위칭 > zustand 활용
function Calendar() {
  return (
    <Layout>
      <MonthlyCalendar />
    </Layout>
  );
}

export default Calendar;

const Layout = styled.div`
  width: 100%;
  height: 100%;
`;
