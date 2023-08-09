import { sum } from './solve-me-first.ts';

describe('sum function', () => {
  it('should return the sum of two positive numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('should return the sum of a positive and a negative number', () => {
    expect(sum(5, -3)).toBe(2);
  });

  it('should return the sum of two negative numbers', () => {
    expect(sum(-7, -5)).toBe(-12);
  });

  it('should return the same number when summing zero with that number', () => {
    expect(sum(0, 10)).toBe(10);
    expect(sum(0, -5)).toBe(-5);
    expect(sum(0, 0)).toBe(0);
  });

  it('should return the same number when summing with zero', () => {
    expect(sum(15, 0)).toBe(15);
    expect(sum(-8, 0)).toBe(-8);
  });

  it('should return a floating-point sum when summing floating-point numbers', () => {
    expect(sum(2.5, 3.5)).toBeCloseTo(6.0, 5);
  });

  it('should handle large positive numbers', () => {
    expect(sum(1000000000, 2000000000)).toBe(3000000000);
  });

  it('should handle large negative numbers', () => {
    expect(sum(-1000000000, -2000000000)).toBe(-3000000000);
  });
});
