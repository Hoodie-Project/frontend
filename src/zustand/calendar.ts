import { create } from 'zustand';
import { changeDate } from '@/src/utils/calendar';
import { CalendarState } from '@/src/models/calendar';

export const useMonthlyCalendarStore = create<CalendarState>(set => ({
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
  totalDate: changeDate(new Date().getMonth() + 1, new Date().getFullYear()),
  today: new Date().getDate(),
  setMonth: (month: number) =>
    set(state => ({
      month,
      totalDate: changeDate(month, state.year),
    })),
  setYear: (year: number) =>
    set(state => ({
      year,
      totalDate: changeDate(state.month, year),
    })),
  goToday: () => {
    const today = new Date();
    set({
      month: today.getMonth() + 1,
      year: today.getFullYear(),
      today: today.getDate(),
      totalDate: changeDate(today.getMonth() + 1, today.getFullYear()),
    });
  },
}));
