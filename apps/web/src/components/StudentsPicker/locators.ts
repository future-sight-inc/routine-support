import { Student } from "@routine-support/domains";

export enum StudentsPickerLocators {
  FieldWrapper = "StudentsPickerFieldWrapper",
  Student = "StudentsPickerStudent",
  DeleteStudent = "StudentsPickerDeleteStudent",
  SearchField = "StudentsPickerSearchField",
  OpenText = "StudentsPickerOpenText",
}

export const createStudentDataTestId = (student: Student) => {
  return `${StudentsPickerLocators.Student}-${student._id}`;
};

export const createDeleteIconDataTestId = (student: Student) => {
  return `${StudentsPickerLocators.DeleteStudent}-${student._id}`;
};
