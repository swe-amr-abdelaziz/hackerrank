// https://www.hackerrank.com/challenges/time-conversion

export default function timeConversion(s: string): string {
  const dayNight: string = s.slice(-2);
  let hour: number = parseInt(s.slice(0, 2), 10);
  hour %= 12;
  if (dayNight === "PM") hour += 12;
  return hour.toString().padStart(2, "0") + s.slice(2, -2);
}
