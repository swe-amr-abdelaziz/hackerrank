// https://www.hackerrank.com/challenges/breaking-best-and-worst-records

export default function breakingRecords(scores: number[]): number[] {
  const result: number[] = [0, 0];
  let max: number = scores[0];
  let min: number = scores[0];
  for (let i: number = 0; i < scores.length - 1; i += 1) {
    if (scores[i + 1] > max) {
      max = scores[i + 1];
      result[0] += 1;
    }
    if (scores[i + 1] < min) {
      min = scores[i + 1];
      result[1] += 1;
    }
  }
  return result;
}
