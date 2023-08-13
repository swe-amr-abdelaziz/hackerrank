// https://www.hackerrank.com/challenges/between-two-sets

export default function getTotalX(a: number[], b: number[]): number {
  let result = 0;
  a.sort();
  b.sort();

  for (let i = a[a.length - 1]; i <= b[0]; i += a[a.length - 1]) {
    let isValid = true;
    for (let j = 0; j < a.length; j += 1) {
      if (i % a[j] !== 0) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      for (let j = 0; j < b.length; j += 1) {
        if (b[j] % i !== 0) {
          isValid = false;
          break;
        }
      }
    }
    if (isValid) result += 1;
  }
  return result;
}
