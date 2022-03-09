import { Student } from "@routine-support/domains";
import { Id } from "@routine-support/types";

export const getStudentsByIds = (
  students?: Student[],
  ids?: Id[]
): Student[] => {
  if (students?.length && ids?.length) {
    return (
      ids
        // ! Идентификаторы студентов соотносятся со списком, нет смысла в проверке
        // eslint-disable-next-line
        .map((id) => students.find((student) => student._id === id)!)
        .filter(Boolean)
    );
  }

  return [];
};

export const getPendingStudents = (
  assignedStudents: Student[] = [],
  confirmedStudents: Student[] = []
) => {
  return assignedStudents.filter(
    (student) => !confirmedStudents.includes(student)
  );
};
