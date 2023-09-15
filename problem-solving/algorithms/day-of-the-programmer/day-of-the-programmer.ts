// https://www.hackerrank.com/challenges/day-of-the-programmer

export default function dayOfProgrammer(year: number): string {
  // daysOfYear except February will be added to the array based on the condition
  const daysOfYear: number[] = [31, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let februaryDays: number = 28;
  if (year === 1918) {
    februaryDays = 15;
  }
  const isLeapYear: boolean =
    (year < 1918 && year % 4 === 0) ||
    (year > 1918 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)));
  if (isLeapYear) {
    februaryDays = 29;
  }
  daysOfYear.splice(1, 0, februaryDays);
  let month: number = 0;
  let day: number = 256;
  while (day > daysOfYear[month]) {
    day -= daysOfYear[month];
    month += 1;
  }
  month += 1;
  return `${day.toString().padStart(2, "0")}.${month
    .toString()
    .padStart(2, "0")}.${year}`;
}

dayOfProgrammer(2017);
