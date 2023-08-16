import breakingRecords from './breaking-best-and-worst-records.ts';

describe('breakingRecords function', () => {
  it('should return An array with the numbers of times she broke her records. Index 0 is for breaking most points records, and index 1 is for breaking least points records (test case 1)', () => {
    expect(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])).toEqual([2, 4]);
  });

  it('should return An array with the numbers of times she broke her records. Index 0 is for breaking most points records, and index 1 is for breaking least points records (test case 2)', () => {
    expect(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])).toEqual([
      4, 0,
    ]);
  });
});
