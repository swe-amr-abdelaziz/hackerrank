// https://www.hackerrank.com/challenges/simple-array-sum

export default function simpleArraySum(ar: number[]): number {
  let sum: number = 0;
  ar.forEach((element) => {
    sum += element;
  });
  return sum;
}
