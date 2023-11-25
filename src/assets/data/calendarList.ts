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
    value: '일상',
    title: '일상',
    color: 'red',
  },
  {
    id: '2',
    value: '회사',
    title: '회사',
    color: 'green',
  },
  {
    id: '3',
    value: '프로젝트',
    title: '프로젝트',
    color: 'blue',
  },
];
