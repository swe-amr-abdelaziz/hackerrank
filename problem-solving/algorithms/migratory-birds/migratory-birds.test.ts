import migratoryBirds from "./migratory-birds.ts";

describe("migratoryBirds function", () => {
  it("should return the lowest type id of the most frequently sighted birds (test case 1)", () => {
    expect(migratoryBirds([1, 1, 2, 2, 3])).toBe(1);
  });

  it("should return the lowest type id of the most frequently sighted birds (test case 2)", () => {
    expect(migratoryBirds([1, 4, 4, 4, 5, 3])).toBe(4);
  });

  it("should return the lowest type id of the most frequently sighted birds (test case 3)", () => {
    expect(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])).toBe(3);
  });
});
