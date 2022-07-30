import { Student } from "@routine-support/domains";
import { Id } from "@routine-support/types";

export const getStudentsByIds = (students: Student[] = [], ids: Id[] = []): Student[] => {
  const result: Student[] = [];

  ids.forEach((id) => {
    // todo из бд у пользователя летит objectId вместо строки
    const student = students.find((student) => String(student._id) === String(id));

    if (student) {
      result.push(student);
    }
  });

  return result;
};
