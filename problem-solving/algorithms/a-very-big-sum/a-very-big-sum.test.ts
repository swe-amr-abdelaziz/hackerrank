import aVeryBigSum from './a-very-big-sum.ts';

describe('aVeryBigSum function', () => {
  it("should return the sum of the array's elements", () => {
    expect(
      aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]),
    ).toBe(5000000015);
  });

  it('should return 0 of there is no elements in the array', () => {
    expect(aVeryBigSum([])).toBe(0);
  });

  it("should return the sum of the array's elements with negative numbers", () => {
    expect(
      aVeryBigSum([
        -1000000001, -1000000002, -1000000003, -1000000004, -1000000005,
      ]),
    ).toBe(-5000000015);
  });

  it("should return the sum of the array's elements with both positive and negative numbers", () => {
    expect(
      aVeryBigSum([
        -1000000001, 1000000002, -1000000003, 1000000004, -1000000005,
      ]),
    ).toBe(-1000000003);
  });
});
