// https://www.hackerrank.com/challenges/birthday-cake-candles

function getMax(array: number[]): number {
  let result: number = array[0];
  array.forEach((element) => {
    if (result < element) {
      result = element;
    }
  });
  return result;
}

export default function birthdayCakeCandles(candles: number[]): number {
  const maxNum: number = getMax(candles);
  return candles.filter((element) => element === maxNum).length;
}
