// https://www.hackerrank.com/challenges/staircase

export default function staircase(n: number): string {
  let stairs: string = '';
  for (let row: number = 0; row < n; row += 1) {
    for (let col: number = 0; col < n; col += 1) {
      stairs += row >= n - col - 1 ? '#' : ' ';
    }
    stairs += '\n';
  }
  return stairs;
}
