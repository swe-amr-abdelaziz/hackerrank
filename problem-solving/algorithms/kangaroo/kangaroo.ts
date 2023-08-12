// https://www.hackerrank.com/challenges/kangaroo

export default function kangaroo(
  x1: number,
  v1: number,
  x2: number,
  v2: number,
): string {
  const diff = Math.abs(x2 - x1) - Math.abs(x2 + v2 - (x1 + v1));
  if (diff > 0 && Math.abs(x2 - x1) % diff === 0) {
    return 'YES';
  }
  return 'NO';
}
