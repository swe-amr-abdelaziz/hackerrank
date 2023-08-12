import { Result, countApplesAndOranges } from './apple-and-orange.ts';

describe('countApplesAndOranges function', () => {
  it("should return an object of 2 numbers: the number of apples that fall on Sam's house, and the number of oranges that fall on Sam's house.", () => {
    const output = { apples: 1, oranges: 1 } as Result;
    expect(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])).toEqual(
      output,
    );
  });
});
