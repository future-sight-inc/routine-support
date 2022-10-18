import { Student } from "@routine-support/domains";
import { getColor } from "@routine-support/ui-theme";

export const createOptionFromStudent = (student: Student) => {
  return { value: student._id, text: student.name, color: getColor(student.color) };
};
