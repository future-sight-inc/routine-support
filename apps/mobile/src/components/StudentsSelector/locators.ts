import { Student } from "@routine-support/domains";

export enum StudentsSelectorLocators {
  Student = "StudentsSelectorStudent",
  ActiveStudent = "StudentsSelectorActiveStudent",
}

export const createStudentTestId = ({
  student,
  isSelected,
}: {
  student: Student;
  isSelected: boolean;
}) => {
  if (isSelected) {
    return `${StudentsSelectorLocators.ActiveStudent}-${student._id}`;
  } else {
    return `${StudentsSelectorLocators.Student}-${student._id}`;
  }
};
