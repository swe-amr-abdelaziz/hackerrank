// https://www.hackerrank.com/challenges/arrays-ds
/* eslint-disable no-param-reassign */

export default function reverseArray(a: number[]): number[] {
  for (let i = 0; i < a.length / 2; i += 1) {
    // Swap palindrome elements in the array
    const idx = a.length - i - 1;
    const tmp = a[idx];
    a[idx] = a[i];
    a[i] = tmp;
  }
  return a;
}
