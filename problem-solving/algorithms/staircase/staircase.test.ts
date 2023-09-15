import staircase from "./staircase.ts";

describe("staircase function", () => {
  it("should print a right angled staircase of size n (test case 1)", () => {
    const output: string = "";
    expect(staircase(0)).toBe(output);
  });

  it("should print a right angled staircase of size n (test case 2)", () => {
    const output: string = "  #\n ##\n###\n";
    expect(staircase(3)).toBe(output);
  });

  it("should print a right angled staircase of size n (test case 3)", () => {
    const output: string = "    #\n   ##\n  ###\n ####\n#####\n";
    expect(staircase(5)).toBe(output);
  });
});
