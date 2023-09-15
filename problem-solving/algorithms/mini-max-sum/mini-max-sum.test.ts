import miniMaxSum from "./mini-max-sum.ts";

describe("miniMaxSum function", () => {
  it("should return an array of the minimum sum and the maximum sum of elements (test case 1)", () => {
    expect(miniMaxSum([1, 3, 5, 7, 9])).toEqual([16, 24]);
  });

  it("should return an array of the minimum sum and the maximum sum of elements (test case 2)", () => {
    expect(miniMaxSum([1, 2, 3, 4, 5])).toEqual([10, 14]);
  });

  it("should return an array of the minimum sum and the maximum sum of elements (test case 3)", () => {
    expect(miniMaxSum([7, 69, 2, 221, 8974])).toEqual([299, 9271]);
  });
});
