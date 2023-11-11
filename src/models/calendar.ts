export interface CalendarState {
  month: number;
  year: number;
  totalDate: number[];
  today: number;
  setMonth: (month: number) => void;
  setYear: (year: number) => void;
  goToday: () => void;
}
