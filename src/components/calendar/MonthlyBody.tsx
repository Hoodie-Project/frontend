import React from 'react';
import styled from 'styled-components';
import MonthlyDates from './MonthlyDates';

interface MonthlyBodyProp {
  totalDate: number[];
  today: number;
  month: number;
  year: number;
}

function MonthlyBody({ totalDate, today, month, year }: MonthlyBodyProp) {
  const lastDate = totalDate.indexOf(1);
  const firstDate = totalDate.lastIndexOf(1);

  // today
  const findToday = totalDate.indexOf(today);
  const getMonth = new Date().getMonth() + 1;

  return (
    <Layout>
      {totalDate.map((date, idx) => (
        <MonthlyDates
          key={idx}
          idx={idx}
          lastDate={lastDate}
          firstDate={firstDate}
          date={date}
          findToday={findToday === idx && month === getMonth}
          month={month}
          year={year}
        />
      ))}
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`;

export default MonthlyBody;
