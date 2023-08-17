import birthday from './the-birthday-bar.ts';

describe('birthday function', () => {
  it('should the number of ways the bar can be divided (test case 1)', () => {
    expect(birthday([2, 2, 1, 3, 2], 4, 2)).toBe(2);
  });

  it('should the number of ways the bar can be divided (test case 2)', () => {
    expect(birthday([1, 2, 1, 3, 2], 3, 2)).toBe(2);
  });

  it('should the number of ways the bar can be divided (test case 3)', () => {
    expect(birthday([1, 1, 1, 1, 1, 1], 3, 2)).toBe(0);
  });

  it('should the number of ways the bar can be divided (test case 4)', () => {
    expect(birthday([4], 4, 1)).toBe(1);
  });
});
