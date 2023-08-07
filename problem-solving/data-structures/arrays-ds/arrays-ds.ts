// https://www.hackerrank.com/challenges/arrays-ds

export function reverseArray(a: number[]): number[] {
  for (let i = 0; i < (a.length / 2); ++i) {
    // Swap palindrome elements in the array
    let tmp;
    let idx = a.length - i - 1;
    tmp = a[idx];
    a[idx] = a[i];
    a[i] = tmp;
  }
  return a;
}
