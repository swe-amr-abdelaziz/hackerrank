// https://www.hackerrank.com/challenges/divisible-sum-pairs

export default function divisibleSumPairs(
  n: number,
  k: number,
  ar: number[],
): number {
  let result: number = 0;
  for (let i: number = 0; i < n; i += 1) {
    for (let j: number = i + 1; j < n; j += 1) {
      if ((ar[i] + ar[j]) % k === 0) {
        result += 1;
      }
    }
  }
  return result;
}
