import React, { useState, useEffect } from 'react';
import Head from './Head';
import MonthlyBody from './MonthlyBody';
import { changeDate } from '@/src/utils/callendar';

function MonthlyCalendar() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [totalDate, setTotalDate] = useState<number[]>([]);
  const [today, setToday] = useState<number>(currentDate.getDate());

  useEffect(() => {
    setTotalDate(changeDate(currentMonth, year));
  }, []);

  useEffect(() => {
    setTotalDate(changeDate(month, year));
  }, [month]);

  const goToday = () => {
    const today = new Date().getDate();
    const thisMonth = new Date().getMonth() + 1;
    setMonth(thisMonth);
    setToday(today);
  };

  return (
    <>
      <Head year={year} month={month} setMonth={setMonth} goToday={goToday} />
      <MonthlyBody totalDate={totalDate} today={today} month={month} year={year} />
    </>
  );
}

export default MonthlyCalendar;
