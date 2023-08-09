// https://www.hackerrank.com/challenges/diagonal-difference

export default function diagonalDifference(arr: number[][]): number {
  let diagonal1: number = 0;
  let diagonal2: number = 0;

  for (let i = 0; i < arr[0].length; i += 1) {
    diagonal1 += arr[i][i];
    diagonal2 += arr[i][arr[i].length - i - 1];
  }

  return Math.abs(diagonal1 - diagonal2);
}
