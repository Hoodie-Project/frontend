import React from 'react';
import Accordion from '@/src/components/common/Accordion';
import { calendarGroupList } from '@/src/assets/data/sidebarCalendar';

function CalendarGroup() {
  return (
    <>
      <Accordion data={calendarGroupList} />
    </>
  );
}

export default CalendarGroup;
