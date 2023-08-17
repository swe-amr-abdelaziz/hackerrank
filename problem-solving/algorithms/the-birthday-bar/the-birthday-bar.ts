// https://www.hackerrank.com/challenges/the-birthday-bar

export default function birthday(s: number[], d: number, m: number): number {
  let result: number = 0;
  let sum: number = 0;
  for (let i: number = 0; i < m; i += 1) {
    sum += s[i];
  }
  if (sum === d) {
    result += 1;
  }
  for (let i: number = m; i < s.length; i += 1) {
    sum = sum + s[i] - s[i - m];
    if (sum === d) {
      result += 1;
    }
  }
  return result;
}
