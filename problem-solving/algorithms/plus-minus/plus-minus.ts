// https://www.hackerrank.com/challenges/plus-minus

export default function plusMinus(arr: number[]): string {
  let positiveCounter: number = 0;
  let negativeCounter: number = 0;
  let zeroCounter: number = 0;

  arr.forEach((element) => {
    if (element > 0) positiveCounter += 1;
    else if (element < 0) negativeCounter += 1;
    else zeroCounter += 1;
  });

  const result = `${Number(positiveCounter / arr.length).toFixed(6)}\n${Number(
    negativeCounter / arr.length,
  ).toFixed(6)}\n${Number(zeroCounter / arr.length).toFixed(6)}`;
  return result;
}
