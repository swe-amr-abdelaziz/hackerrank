import kangaroo from './kangaroo.ts';

describe('kangaroo function', () => {
  it('should return "YES" if it is possible to get both kangaroos at the same location at the same time, otherwise return "NO" (test case 1)', () => {
    expect(kangaroo(2, 1, 1, 2)).toBe('YES');
  });

  it('should return "YES" if it is possible to get both kangaroos at the same location at the same time, otherwise return "NO" (test case 2)', () => {
    expect(kangaroo(0, 3, 4, 2)).toBe('YES');
  });

  it('should return "YES" if it is possible to get both kangaroos at the same location at the same time, otherwise return "NO" (test case 3)', () => {
    expect(kangaroo(0, 2, 5, 3)).toBe('NO');
  });
});
