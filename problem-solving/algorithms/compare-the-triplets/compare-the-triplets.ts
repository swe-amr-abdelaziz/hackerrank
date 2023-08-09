// https://www.hackerrank.com/challenges/compare-the-triplets

export default function compareTriplets(a: number[], b: number[]): number[] {
  const result: number[] = [0, 0];
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] > b[i]) {
      result[0] += 1;
    } else if (b[i] > a[i]) {
      result[1] += 1;
    }
  }
  return result;
}
