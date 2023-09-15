import timeConversion from "./time-conversion.ts";

describe("timeConversion function", () => {
  it("should return string: the time in 24 hour format (test case 1)", () => {
    expect(timeConversion("12:00:00AM")).toBe("00:00:00");
  });

  it("should return string: the time in 24 hour format (test case 2)", () => {
    expect(timeConversion("12:00:00PM")).toBe("12:00:00");
  });

  it("should return string: the time in 24 hour format (test case 3)", () => {
    expect(timeConversion("11:59:59AM")).toBe("11:59:59");
  });

  it("should return string: the time in 24 hour format (test case 4)", () => {
    expect(timeConversion("11:59:59PM")).toBe("23:59:59");
  });

  it("should return string: the time in 24 hour format (test case 5)", () => {
    expect(timeConversion("07:05:45PM")).toBe("19:05:45");
  });
});
