// https://www.hackerrank.com/challenges/mini-max-sum

function arrSum(arr: number[]): number {
  let sum: number = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
}

export default function miniMaxSum(arr: number[]): number[] {
  const sortedArray = arr.sort();
  const miniSum = arrSum(sortedArray.slice(0, sortedArray.length - 1));
  const maxSum = arrSum(sortedArray.slice(1, sortedArray.length));
  return [miniSum, maxSum];
}
