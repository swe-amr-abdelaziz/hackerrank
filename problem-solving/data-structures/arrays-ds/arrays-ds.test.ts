import { reverseArray } from './arrays-ds';

describe('reverseArray function', () => {
  it('should return the reversed array of odd length array', () => {
    expect(reverseArray([3, 6, 2, 7, 9])).toEqual([9, 7, 2, 6, 3]);
  });

  it('should return the reversed array of even length array', () => {
    expect(reverseArray([1, 4, 3, 2])).toEqual([2, 3, 4, 1]);
  });

  it('should return the same array of palindrome array 1', () => {
    expect(reverseArray([1, 2, 3, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 3, 2, 1]);
  });

  it('should return the same array of palindrome array 2', () => {
    expect(reverseArray([1])).toEqual([1]);
  });

  it('should return the same array of palindrome array 3', () => {
    expect(reverseArray([])).toEqual([]);
  });
});
