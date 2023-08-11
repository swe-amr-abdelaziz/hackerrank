import plusMinus from './plus-minus.ts';

describe('plusMinus function', () => {
  it('should return the ratios of positive, negative and zero values in the array (test case 1)', () => {
    const arr = [1, 1, 0, -1, -1];
    expect(plusMinus(arr)).toBe('0.400000\n0.400000\n0.200000');
  });

  it('should return the ratios of positive, negative and zero values in the array (test case 2)', () => {
    const arr = [-4, 3, -9, 0, 4, 1];
    expect(plusMinus(arr)).toBe('0.500000\n0.333333\n0.166667');
  });

  it('should return the ratios of positive, negative and zero values in the array (test case 2)', () => {
    const arr = [1, 2, 3, -1, -2, -3, 0, 0];
    expect(plusMinus(arr)).toBe('0.375000\n0.375000\n0.250000');
  });
});
