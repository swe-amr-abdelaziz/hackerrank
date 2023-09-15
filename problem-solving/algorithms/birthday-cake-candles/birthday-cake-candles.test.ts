import birthdayCakeCandles from "./birthday-cake-candles.ts";

describe("birthdayCakeCandles function", () => {
  it("should return the number of candles that are tallest (test case 1)", () => {
    expect(birthdayCakeCandles([4, 4, 3, 1])).toBe(2);
  });

  it("should return the number of candles that are tallest (test case 2)", () => {
    expect(birthdayCakeCandles([3, 2, 1, 3])).toBe(2);
  });

  it("should return the number of candles that are tallest (test case 3)", () => {
    expect(birthdayCakeCandles([4, 1, 2, 3, 7, 2, 6])).toBe(1);
  });

  it("should return the number of candles that are tallest (test case 4)", () => {
    expect(birthdayCakeCandles([])).toBe(0);
  });

  it("should return the number of candles that are tallest (test case 5)", () => {
    expect(birthdayCakeCandles([4])).toBe(1);
  });
});
