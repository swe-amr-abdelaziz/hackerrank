// https://www.hackerrank.com/challenges/grading

function roundGrade(grade: number): number {
  return Math.ceil(grade / 5) * 5;
}

export default function gradingStudents(grades: number[]): number[] {
  return grades.map((grade) => {
    if (grade >= 38) {
      const roundedGrade = roundGrade(grade);
      const diff = roundedGrade - grade;
      return diff < 3 ? roundedGrade : grade;
    }
    return grade;
  });
}
