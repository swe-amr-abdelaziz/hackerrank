// https://www.hackerrank.com/challenges/2d-array

function singleHourglassSum(
  arr: number[][],
  rowStart: number,
  colStart: number,
): number {
  let sum: number = 0;
  for (let row = rowStart; row < rowStart + 3; row += 1) {
    for (let col = colStart; col < colStart + 3; col += 1) {
      if (col === colStart + 1 || row !== rowStart + 1) {
        sum += arr[row][col];
      }
    }
  }
  return sum;
}

export default function hourglassSum(arr: number[][]): number {
  let result: number = arr[0][0];
  for (let row = 0; row <= arr.length - 3; row += 1) {
    for (let col = 0; col <= arr[row].length - 3; col += 1) {
      const value = singleHourglassSum(arr, row, col);
      if ((row === 0 && col === 0) || result < value) {
        result = value;
      }
    }
  }
  return result;
}
