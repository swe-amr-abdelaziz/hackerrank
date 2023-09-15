import bonAppetit from "./bon-appetit.ts";

describe("bonAppetit function", () => {
  it("should print 'Bon Appetit' on a new line If Brian did not overcharge Anna; otherwise, print the difference that Brian must refund to Anna (test case 1)", () => {
    expect(bonAppetit([3, 10, 2, 9], 1, 12)).toBe("5");
  });

  it("should print 'Bon Appetit' on a new line If Brian did not overcharge Anna; otherwise, print the difference that Brian must refund to Anna (test case 2)", () => {
    expect(bonAppetit([3, 10, 2, 9], 1, 7)).toBe("Bon Appetit");
  });

  it("should print 'Bon Appetit' on a new line If Brian did not overcharge Anna; otherwise, print the difference that Brian must refund to Anna (test case 3)", () => {
    expect(bonAppetit([3, 10, 2, 9], 1, 4)).toBe("-3");
  });
});
