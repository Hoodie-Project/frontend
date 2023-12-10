// calendat mock data
interface Calendar {
  id: string;
  value: string;
  title: string;
  color: string;
}

export const calendarList: Calendar[] = [
  {
    id: '1',
    title: '캘린더 1',
    value: '캘린더 1',
    color: '#A6F4FF',
  },
  {
    id: '2',
    title: '캘린더 2',
    value: '캘린더 2',
    color: '#B2FFA6',
  },
  {
    id: '3',
    title: '캘린더 3',
    value: '캘린더 3',
    color: '#FF9595',
  },
];

// TODO 이벤트 데이터는 전역에서 관리해야할듯
export const eventExample = [
  {
    id: '1',
    calendar: '캘린더 1',
    calendarColor: '#A6F4FF',
    eventName: '이벤트 연습용',
    startDate: '2023-12-1',
    endDate: '2023-12-2',
    repeat: {},
    memo: '이벤트 연습용',
  },
  {
    id: '2',
    calendar: '캘린더 2',
    calendarColor: '#B2FFA6',
    eventName: '이벤트 연습용 2',
    startDate: '2023-12-1',
    endDate: '2023-12-1',
    repeat: {},
    memo: '이벤트 연습용 2',
  },
  {
    id: '3',
    calendar: '캘린더 3',
    calendarColor: '#FF9595',
    eventName: '이벤트 연습용 3',
    startDate: '2023-12-2',
    endDate: '2023-12-2',
    repeat: {},
    memo: '이벤트 연습용 3',
  },
];
