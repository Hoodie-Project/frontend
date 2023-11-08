/**
 *
 * @param targetMonth number 특정 달
 * @param year number 현재 년도
 * @returns targetMonth에 대한 달력 데이터를 배열형태로 리턴
 */
export function changeDate(targetMonth: number, year: number): number[] {
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
