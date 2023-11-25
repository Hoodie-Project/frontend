// 반복
export const repeatPeriodDropDown = [
  {
    value: 'daily',
    title: '매일',
  },
  {
    value: 'weekly',
    title: '매주',
  },
  {
    value: 'monthly',
    title: '매월',
  },
  {
    value: 'yearly',
    title: '매년',
  },
];

// 주기
// 매일, 매주, 매월
// 1~12, 1~31, 1~99 배열을 만들어주는 함수
export const oneToNumberDropDown = (num: number) =>
  Array.from({ length: num }, (_, i) => ({ value: i + 1, title: i + 1 }));

// 요일 설정 체크리스트
export const weeklySettingCheckList = [
  {
    value: 'sun',
    label: '일',
    checked: false,
  },
  {
    value: 'mon',
    label: '월',
    checked: false,
  },
  {
    value: 'tue',
    label: '화',
    checked: false,
  },
  {
    value: 'wed',
    label: '수',
    checked: false,
  },
  {
    value: 'thurs',
    label: '목',
    checked: false,
  },
  {
    value: 'fri',
    label: '금',
    checked: false,
  },
  {
    value: 'sat',
    label: '토',
    checked: false,
  },
];

// 첫째주, 둘째주, 셋째주, 넷째주,...
export const weeklySettingDropDown = [
  {
    value: 'first',
    title: '첫째',
  },
  {
    value: 'second',
    title: '둘째',
  },
  {
    value: 'third',
    title: '셋째',
  },
  {
    value: 'fourth',
    title: '넷째',
  },
  {
    value: 'finally',
    title: '마지막',
  },
];

// export const settingDropDown = [
//   {
//     value: 'dailySetting',
//     title: '일단위',
//     content: {
//       dropdown: oneToNumberDropDown(31),
//     },
//   },
//   {
//     value: 'weeklySetting',
//     title: '주단위',
//     content: {
//       dropdown: weeklySettingDropDown,
//       checkbox: weeklySettingCheckList,
//     },
//   },
// ];

export const settingDropDown = [
  {
    value: 'dailySetting',
    title: '일단위',
  },
  {
    value: 'weeklySetting',
    title: '주단위',
  },
];

// 종료
export const endDropDown = [
  {
    value: 'datePick',
    title: '종료 날짜 선택',
    // content: 'DateSelector',
  },
  {
    value: 'times',
    title: '이후(횟수)',
    // content: 'Input',
  },
  {
    value: 'infinity',
    title: '종료 날짜 없음',
  },
];

export const returnContents = [
  {
    id: 'daily',
    cycle: {
      label: '주기',
      content: oneToNumberDropDown(99),
    },
    endDate: {
      label: '종료',
      content: endDropDown,
    },
  },
  {
    id: 'weekly',
    cycle: {
      label: '주기',
      content: oneToNumberDropDown(99),
    },
    setting: { label: '설정', content: weeklySettingCheckList },
    endDate: {
      label: '종료',
      content: endDropDown,
    },
  },
  {
    id: 'monthly',
    cycle: {
      label: '주기',
      content: oneToNumberDropDown(99),
    },
    setting: { label: '설정', content: settingDropDown },
    endDate: {
      label: '종료',
      content: endDropDown,
    },
  },
  {
    id: 'yearly',
    cycle: {
      label: '주기',
      content: oneToNumberDropDown(12),
    },
    setting: { label: '설정', content: settingDropDown },
    endDate: {
      label: '종료',
      content: endDropDown,
    },
  },
];
