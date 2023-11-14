/**
 *
 * @param targetMonth number 특정 달
 * @param year number 현재 년도
 * @returns targetMonth에 대한 달력 데이터를 배열형태로 리턴
 */
export function changeDate(targetMonth: number, year: number): number[] {
  // 월이 1부터 12까지만 허용하도록

  // 이전 달의 마지막 날짜와 요일
  const prevLastDate = new Date(year, targetMonth - 1, 0).getDate();
  const prevLastDay = new Date(year, targetMonth - 1, 0).getDay();
  // 이번 달의 마지막 날짜와 요일
  const thisLastDay = new Date(year, targetMonth, 0).getDay();
  const thisLastDate = new Date(year, targetMonth, 0).getDate();

  // 이전 달의 날짜들을 계산
  const prevDates = [...Array(prevLastDay + 1).keys()].map((_, i) => prevLastDate - i).reverse();
  // 이번 달의 날짜들을 계산
  const thisDates = Array.from({ length: thisLastDate }, (_, i) => i + 1);
  // 다음 달의 날짜들을 계산
  const nextDates = Array.from({ length: 6 - thisLastDay }, (_, i) => i + 1);

  // 12월 이후 월은 1월로 처리
  if (targetMonth > 12) {
    targetMonth = 1;
    year += 1;
  }
  // 1월 이전 월은 12월로 처리
  if (targetMonth < 1) {
    targetMonth = 12;
    year -= 1;
  }

  return [...prevDates, ...thisDates, ...nextDates];
}

/**
 *
 * @param monthNumber number
 * @returns January, February, March, April, May, June, July, August, September, October, November, December
 */
export function getMonthName(monthNumber: number) {
  const monthNames = [
    '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return monthNames[monthNumber];
}
