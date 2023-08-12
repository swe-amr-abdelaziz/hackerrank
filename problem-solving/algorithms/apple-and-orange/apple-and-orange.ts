// https://www.hackerrank.com/challenges/apple-and-orange

export interface Result {
  apples: number;
  oranges: number;
}

function noOfItems(s: number, t: number, items: number[]): number {
  let count = 0;
  items.forEach((item) => {
    if (item >= s && item <= t) count += 1;
  });
  return count;
}

export function countApplesAndOranges(
  s: number,
  t: number,
  a: number,
  b: number,
  apples: number[],
  oranges: number[],
): Result {
  const applesAdjusted: number[] = apples.map((distance) => a + distance);
  const orangesAdjusted: number[] = oranges.map((distance) => b + distance);

  return {
    apples: noOfItems(s, t, applesAdjusted),
    oranges: noOfItems(s, t, orangesAdjusted),
  } as Result;
}
