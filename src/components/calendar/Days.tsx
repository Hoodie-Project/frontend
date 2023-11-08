import React from 'react';
import { styled } from 'styled-components';

function Days() {
  const DAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <Layout>
      {DAY.map((day, idx) => (
        <Day key={idx}>{day}</Day>
      ))}
    </Layout>
  );
}

export default Days;

const Layout = styled.div`
  display: flex;
`;

const Day = styled.li`
  width: calc(100% / 7);
  text-align: center;
  background-color: #e5e0ed;
  padding: 0.2vw;
  :nth-child(7n + 1),
  :nth-child(7n) {
    color: #969696;
  }
`;
