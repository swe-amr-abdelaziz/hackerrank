import { compareTriplets } from './compare-the-triplets.ts';

describe("compareTriplets function: should return an array of 2 numbers: Alice's score is in the first position, and Bob's score is in the second.", () => {
  it('Test Case 1', () => {
    expect(compareTriplets([1, 2, 3], [3, 2, 1])).toEqual([1, 1]);
  });

  it('Test Case 2', () => {
    expect(compareTriplets([5, 6, 7], [3, 6, 10])).toEqual([1, 1]);
  });

  it('Test Case 2', () => {
    expect(compareTriplets([17, 28, 30], [99, 16, 8])).toEqual([2, 1]);
  });

  it('Test Case 2', () => {
    expect(compareTriplets([17, 2, 30], [99, 16, 8])).toEqual([1, 2]);
  });

  it('Test Case 2', () => {
    expect(compareTriplets([99, 30, 20], [70, 16, 8])).toEqual([3, 0]);
  });

  it('Test Case 2', () => {
    expect(compareTriplets([70, 16, 8], [99, 30, 20])).toEqual([0, 3]);
  });

  it('Test Case 2', () => {
    expect(compareTriplets([1, 2, 3], [1, 2, 3])).toEqual([0, 0]);
  });
});
