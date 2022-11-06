import { Student } from "@routine-support/domains";
import { Id } from "@routine-support/types";

export const getStudentsByIds = (students: Student[] = [], ids: Id[] = []): Student[] => {
  const result: Student[] = [];

  ids.forEach((id) => {
    const student = students.find((student) => student._id === id);

    if (student) {
      result.push(student);
    }
  });

  return result;
};
