import dayOfProgrammer from "./day-of-the-programmer.ts";

describe("dayOfProgrammer function", () => {
  it("should return the full date of Day of the Programmer during year y in the format dd.mm.yyyy (test case 1)", () => {
    expect(dayOfProgrammer(2017)).toBe("13.09.2017");
  });

  it("should return the full date of Day of the Programmer during year y in the format dd.mm.yyyy (test case 2)", () => {
    expect(dayOfProgrammer(2016)).toBe("12.09.2016");
  });

  it("should return the full date of Day of the Programmer during year y in the format dd.mm.yyyy (test case 3)", () => {
    expect(dayOfProgrammer(1800)).toBe("12.09.1800");
  });

  it("should return the full date of Day of the Programmer during year y in the format dd.mm.yyyy (test case 4)", () => {
    expect(dayOfProgrammer(1918)).toBe("26.09.1918");
  });
});
