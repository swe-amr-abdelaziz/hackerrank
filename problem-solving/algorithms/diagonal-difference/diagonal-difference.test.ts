import diagonalDifference from './diagonal-difference.ts';

describe('diagonalDifference function', () => {
  it('should return the absolute difference of 2d array diagonals', () => {
    expect(
      diagonalDifference([
        [1, 2, 3],
        [4, 5, 6],
        [9, 8, 9],
      ]),
    ).toBe(2);
  });

  it('should return the absolute difference of 2d array diagonals', () => {
    expect(
      diagonalDifference([
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12],
      ]),
    ).toBe(15);
  });

  it('should return the absolute difference of 2d array diagonals', () => {
    expect(
      diagonalDifference([
        [20, 2, 7],
        [4, 4, 32],
        [44, 9, 5],
      ]),
    ).toBe(26);
  });
});
