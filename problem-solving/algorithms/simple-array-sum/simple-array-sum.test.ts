import { simpleArraySum } from './simple-array-sum';

describe('simpleArraySum function', () => {
  it('should return the sum of all numbers in the array', () => {
    expect(simpleArraySum([1, 2, 3, 4, 10, 11])).toBe(31);
  });

  it('should return the sum of positive and negative numbers in the array', () => {
    expect(simpleArraySum([1, -2, 3, -4, 10, -11])).toBe(-3);
  });

  it('should return the sum of negative numbers in the array', () => {
    expect(simpleArraySum([-1, -2, -3, -4, -10, -11])).toBe(-31);
  });
  
  it('should return the sum of float numbers in the array', () => {
    expect(simpleArraySum([0.5, 2.5, 3.3, 5.8, 6.1])).toBe(18.2);
  });

  it('should handle large positive numbers', () => {
    expect(simpleArraySum([1000000000, 1000000000, 1000000000, 1000000000, 1000000000])).toBe(5000000000);
  });

  it('should handle large negative numbers', () => {
    expect(simpleArraySum([-1000000000, -1000000000, -1000000000, -1000000000, -1000000000])).toBe(-5000000000);
  });
});
