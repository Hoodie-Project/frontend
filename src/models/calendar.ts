export interface CalendarState {
  month: number;
  year: number;
  totalDate: number[];
  today: number;
  setMonth: (month: number) => void;
  setYear: (year: number) => void;
  goToday: () => void;
}

export interface SidebarCalendarGroup {
  id: string;
  title: string;
  list: SidebarCalendar[];
}

export interface SidebarCalendar {
  id: string;
  title: string;
  color: string;
}
