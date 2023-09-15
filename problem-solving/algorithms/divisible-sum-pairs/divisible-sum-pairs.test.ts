import divisibleSumPairs from "./divisible-sum-pairs.ts";

describe("divisibleSumPairs", () => {
  it("should return the number of (i, j) pairs where i < j and ar[i] + ar[j] is divisible by k (test case 1)", () => {
    expect(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6])).toBe(3);
  });

  it("should return the number of (i, j) pairs where i < j and ar[i] + ar[j] is divisible by k (test case 2)", () => {
    expect(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])).toBe(5);
  });

  it("should return the number of (i, j) pairs where i < j and ar[i] + ar[j] is divisible by k (test case 3)", () => {
    expect(divisibleSumPairs(10, 7, [7, 0, 6, 2, 5, 3, 9, 1, 4, 8])).toBe(6);
  });
});
