import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useModalStore } from '@/src/zustand/modal';
import { eventExample } from '@/src/assets/data/calendarList';
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
  const { openCreateEventModal } = useModalStore();

  const handleOpenCreateEventModal = () => {
    if (type === 'mini') return;
    openCreateEventModal();
  };

  // 현재 달력에 표시된 월과 일치하는 날짜인지 확인
  const isCurrentMonth = idx >= lastDate && (firstDate === 0 || idx < firstDate);

  // 이벤트 필터링 로직
  const currentDate = new Date(year, month - 1, date);
  const filteredEvents = eventExample
    .filter(event => {
      const startDate = new Date(event.startDate);
      const endDate = new Date(event.endDate);
      const isSameMonth =
        startDate.getMonth() === currentDate.getMonth() && startDate.getFullYear() === currentDate.getFullYear();
      return isSameMonth && startDate <= currentDate && currentDate <= endDate;
    })
    .filter(event => isCurrentMonth); // 현재 달에 해당하는 날짜만 필터링

  return (
    <Layout $type={type} $totalDateLength={totalDateLength} onDoubleClick={handleOpenCreateEventModal}>
      <DateNum $type={type} $idx={idx} $lastDate={lastDate} $firstDate={firstDate}>
        <TodayCSS $findToday={findToday} $type={type}>
          {date}
        </TodayCSS>
      </DateNum>
      {/* 이벤트 표시 */}
      {type !== 'mini' &&
        filteredEvents.map(event => (
          <EventLine key={event.id} $eventColor={event.calendarColor}>
            {event.memo}
          </EventLine>
        ))}
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
  width: 1.625rem;
  height: 1.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.1rem;
  ${props =>
    props.$findToday &&
    css`
      border-radius: 50%;
      font-weight: 700;
      color: #ffffff;
      background-color: #6f40ff;
    `}
`;

const EventLine = styled.div<{ $eventColor: string }>`
  background-color: ${props => props.$eventColor};
  color: black;
`;

export default MonthlyDates;
