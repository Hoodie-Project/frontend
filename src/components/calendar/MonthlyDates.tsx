import React from 'react';
import styled, { css } from 'styled-components';

interface DatesProps {
  lastDate: number;
  firstDate: number;
  date: number;
  findToday: boolean;
  month: number;
  year: number;
  idx: number;
  type?: string;
  totalDateLength: number;
}

function MonthlyDates({ lastDate, firstDate, date, findToday, month, year, idx, type, totalDateLength }: DatesProps) {
  return (
    <Layout
      $type={type}
      $totalDateLength={totalDateLength}
      onDoubleClick={() => {
        alert('더블 클릭시 이벤트 생성');
      }}
    >
      <DateNum $type={type} $idx={idx} $lastDate={lastDate} $firstDate={firstDate}>
        <TodayCSS $findToday={findToday} $type={type}>
          {date}
        </TodayCSS>
      </DateNum>
    </Layout>
  );
}

const Layout = styled.li<{ $type?: string; $totalDateLength: number }>`
  position: relative;
  width: calc(100% / 7);
  height: calc(100% / ${props => Math.ceil(props.$totalDateLength / 7)});

  ${props =>
    props.$type !== 'mini'
      ? css`
          border-bottom: 1px solid #e5e0ed;
          border-left: 1px solid #e5e0ed;
          background-color: white;
          &:nth-child(7n) {
            border-right: 1px solid #e5e0ed;
          }

          &:nth-child(7n + 1),
          &:nth-child(7n) {
            color: #7a7a7a;
            background-color: #f8f6fb;
          }
        `
      : css`
          display: flex;
          align-items: center;
          justify-content: center;
        `}
`;

const DateNum = styled.div<{ $idx: number; $lastDate: number; $firstDate: number; $type?: string }>`
  padding: ${props => (props.$type === 'mini' ? '0rem' : '0.5rem 0 0 0.5rem')};
  font-size: ${props => (props.$type === 'mini' ? '11px' : '15px')};
  ${props =>
    props.$idx < props.$lastDate &&
    css`
      color: #7a7a7a;
    `};

  ${props =>
    props.$firstDate > 0 &&
    props.$idx > props.$firstDate - 1 &&
    css`
      color: #7a7a7a;
    `};
`;

const TodayCSS = styled.span<{ $findToday: boolean; $type?: string }>`
  ${props =>
    props.$findToday &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;

      width: 1.625rem;
      height: 1.625rem;
      border-radius: 50%;
      font-weight: 700;
      color: #ffffff;
      background-color: #6f40ff;
    `}
`;

export default MonthlyDates;
