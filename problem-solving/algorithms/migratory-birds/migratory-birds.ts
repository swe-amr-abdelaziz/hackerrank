// https://www.hackerrank.com/challenges/migratory-birds

export default function migratoryBirds(arr: number[]): number {
  const frequency: number[] = [0, 0, 0, 0, 0];
  arr.forEach((element) => {
    frequency[element - 1] += 1;
  });
  const maxFrequency: number = Math.max(...frequency);
  let result: number = -1;
  for (let i: number = 0; i < frequency.length; i += 1) {
    if (frequency[i] === maxFrequency) {
      result = i + 1;
      break;
    }
  }
  return result;
}
