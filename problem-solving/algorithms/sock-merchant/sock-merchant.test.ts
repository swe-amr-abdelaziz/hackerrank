import sockMerchant from "./sock-merchant.ts";

describe("sockMerchant function", () => {
  it("should return the number of sock pairs (test case 1)", () => {
    expect(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3);
  });

  it("should return the number of sock pairs (test case 2)", () => {
    expect(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3])).toBe(4);
  });

  it("should return the number of sock pairs (test case 3)", () => {
    expect(sockMerchant(0, [])).toBe(0);
  });
});
