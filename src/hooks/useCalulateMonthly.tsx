import { useState, useEffect } from 'react';
import { changeDate } from '@/src/utils/calendar';

export function useCalculateMonthly(initialMonth: number, initialYear: number) {
  const [month, setMonth] = useState(initialMonth);
  const [year, setYear] = useState(initialYear);
  const [totalDate, setTotalDate] = useState<number[]>([]);
  const [today, setToday] = useState<number>(new Date().getDate());

  useEffect(() => {
    setTotalDate(changeDate(month, year));
  }, [month, year]);

  const goToday = () => {
    const today = new Date().getDate();
    const thisMonth = new Date().getMonth() + 1;
    const thisYear = new Date().getFullYear();
    setMonth(thisMonth);
    setYear(thisYear);
    setToday(today);
  };

  return { month, setMonth, year, totalDate, today, goToday };
}
