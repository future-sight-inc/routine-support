import { Student } from "@routine-support/domains";

export const getStudentsByIds = (students: Student[] = [], ids: string[] = []): Student[] => {
  const result: Student[] = [];

  ids.forEach((id) => {
    const student = students.find((student) => student._id === id);

    if (student) {
      result.push(student);
    }
  });

  return result;
};
