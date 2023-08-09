// https://www.hackerrank.com/challenges/a-very-big-sum

export default function aVeryBigSum(ar: number[]): number {
  let sum: number = 0;
  ar.forEach((element) => {
    sum += element;
  });
  return sum;
}
