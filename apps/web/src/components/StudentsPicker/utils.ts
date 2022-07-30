import { Student } from "@routine-support/domains";
import { Id } from "@routine-support/types";

export const filterStudents = ({
  students,
  selectedStudents,
  filter,
}: {
  students: Student[];
  selectedStudents: Id[];
  filter: string;
}) => {
  let filtered = students;

  selectedStudents.forEach((selectedStudent) => {
    filtered = filtered.filter((student) => student._id !== selectedStudent);
  });

  if (filter.length) {
    filtered = filtered.filter((student) => new RegExp(filter, "i").test(student.name));
  }

  return filtered;
};
