import pageCount from "./drawing-book.ts";

describe("pageCount function", () => {
  it("should return the minimum number of pages to turn (test case 1)", () => {
    expect(pageCount(6, 2)).toBe(1);
  });

  it("should return the minimum number of pages to turn (test case 2)", () => {
    expect(pageCount(5, 4)).toBe(0);
  });

  it("should return the minimum number of pages to turn (test case 3)", () => {
    expect(pageCount(20, 1)).toBe(0);
  });

  it("should return the minimum number of pages to turn (test case 4)", () => {
    expect(pageCount(6, 3)).toBe(1);
  });

  it("should return the minimum number of pages to turn (test case 5)", () => {
    expect(pageCount(12, 6)).toBe(3);
  });
});
