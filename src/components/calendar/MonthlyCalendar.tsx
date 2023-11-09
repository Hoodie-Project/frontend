import React from 'react';
import Head from './Head';
import MonthlyBody from './MonthlyBody';
import { useMonthlyCalendarStore } from '@/src/zustand/calendar';
import styled from 'styled-components';

interface MonthlyCalendarProps {
  type?: string;
}

function MonthlyCalendar({ type }: MonthlyCalendarProps) {
  const { month, setMonth, year, totalDate, today, goToday } = useMonthlyCalendarStore();

  return (
    <Layout $type={type}>
      <Head year={year} month={month} setMonth={setMonth} goToday={goToday} type={type} />
      <MonthlyBody totalDate={totalDate} today={today} month={month} year={year} type={type} />
    </Layout>
  );
}

export default MonthlyCalendar;

const Layout = styled.section<{ $type?: string }>`
  width: 100%;
  height: ${props => (props.$type === 'mini' ? '10.625rem' : '100%')};
`;
