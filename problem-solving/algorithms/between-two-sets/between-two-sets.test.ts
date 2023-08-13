import getTotalX from './between-two-sets.ts';

describe('getTotalX function', () => {
  it('should return the number of integers that are between the sets (test case 1)', () => {
    expect(getTotalX([2, 4], [16, 32, 96])).toBe(3);
  });

  it('should return the number of integers that are between the sets (test case 2)', () => {
    expect(getTotalX([3, 4], [24, 48])).toBe(2);
  });
});
