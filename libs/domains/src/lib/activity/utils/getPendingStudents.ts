import { Student } from "@routine-support/domains";

export const getPendingStudents = (
  assignedStudents: Student[] = [],
  confirmedStudents: Student[] = []
): Student[] => {
  return assignedStudents.filter((student) => !confirmedStudents.includes(student));
};
