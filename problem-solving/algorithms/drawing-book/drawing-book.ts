// https://www.hackerrank.com/challenges/drawing-book

export default function pageCount(n: number, p: number): number {
  const pageCountFront: number = Math.ceil((p - 1) / 2);
  const pageCountBack: number = Math.ceil(
    (n % 2 === 0 ? n - p : n - p - 1) / 2,
  );
  return Math.min(pageCountFront, pageCountBack);
}
