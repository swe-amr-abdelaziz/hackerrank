// https://www.hackerrank.com/challenges/bon-appetit

function sum(arr: number[]): number {
  if (Array.isArray(arr)) {
    return arr.reduce((acc, val) => {
      return acc + val;
    }, 0);
  }
  return NaN;
}

export default function bonAppetit(
  bill: number[],
  k: number,
  b: number,
): string {
  if (k >= 0 && k < bill.length) {
    bill.splice(k, 1);
  }
  const annaPayment: number = sum(bill) / 2;
  const difference: number = b - annaPayment;
  return difference === 0 ? "Bon Appetit" : difference.toString();
}
