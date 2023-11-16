import React from 'react';
import { css, styled } from 'styled-components';

interface DaysProps {
  type?: string;
}

function Days({ type }: DaysProps) {
  const DAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const DAYMINI = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const daysToDisplay = type === 'mini' ? DAYMINI : DAY;

  return (
    <Layout>
      {daysToDisplay.map((day, idx) => (
        <Day key={idx} $type={type}>
          {day}
        </Day>
      ))}
    </Layout>
  );
}

export default Days;

const Layout = styled.div`
  display: flex;
`;

const Day = styled.li<{ $type?: string }>`
  width: calc(100% / 7);
  text-align: center;
  background-color: ${props => (props.$type !== 'mini' ? '#e5e0ed' : '')};
  padding: 0.2vw;
  :nth-child(7n + 1),
  :nth-child(7n) {
    color: #969696;
  }
  ${props =>
    props.$type === 'mini' &&
    css`
      font-size: 11px;
      font-weight: bolder;
    `}
`;
