import { Student } from "@routine-support/domains";

export enum FilterSelectorLocators {
  Student = "FilterSelectorStudent",
  ActiveStudent = "FilterSelectorActiveStudent",
}

export const createStudentTestId = ({
  student,
  isSelected,
}: {
  student: Student;
  isSelected: boolean;
}) => {
  if (isSelected) {
    return `${FilterSelectorLocators.ActiveStudent}-${student._id}`;
  } else {
    return `${FilterSelectorLocators.Student}-${student._id}`;
  }
};
