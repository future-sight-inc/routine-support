import { Student } from "@routine-support/domains";

export const filterStudents = ({
  students,
  selectedStudents,
  filter,
}: {
  students: Student[];
  selectedStudents: Student[];
  filter: string;
}) => {
  let filtered = students;

  selectedStudents.forEach((selectedStudent) => {
    filtered = filtered.filter(
      (student) => student._id !== selectedStudent._id
    );
  });

  if (filter.length) {
    filtered = filtered.filter((student) => student.name.includes(filter));
  }

  return filtered;
};
