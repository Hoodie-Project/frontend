import React from 'react';
import Accordion from '@/src/components/common/Accordion';
import { calendarGroupList } from '@/src/assets/data/sidebarCalendar';
import { styled } from 'styled-components';

function CalendarGroup() {
  return (
    <>
      <Accordion type='calendarGroup' data={calendarGroupList}>
        <AddCalendarBtn>+ Add Calendar</AddCalendarBtn>
      </Accordion>
    </>
  );
}

export default CalendarGroup;

const AddCalendarBtn = styled.button`
  color: #6f40ff;
  font-weight: bold;
`;
