import gradingStudents from './grading-students.ts';

describe('gradingStudents function', () => {
  it('should return the grades after rounding as appropriate (test case 1)', () => {
    expect(gradingStudents([73, 67, 38, 33])).toEqual([75, 67, 40, 33]);
  });

  it('should return the grades after rounding as appropriate (test case 2)', () => {
    expect(gradingStudents([38, 29, 57, 84])).toEqual([40, 29, 57, 85]);
  });

  it('should return the grades after rounding as appropriate (test case 3)', () => {
    expect(gradingStudents([21, 29, 97, 98, 99])).toEqual([
      21, 29, 97, 100, 100,
    ]);
  });
});
