import { Student } from "@routine-support/domains";

export enum StudentsPickerLocators {
  Overlay = "StudentsPickerOverlay",
  FieldWrapper = "StudentsPickerFieldWrapper",
  Student = "StudentsPickerStudent",
  DeleteStudent = "StudentsPickerDeleteStudent",
  SearchField = "StudentsPickerSearchField",
  OpenText = "StudentsPickerOpenText",
  Menu = "StudentsPickerMenu",
  Option = "StudentsPickerOption",
  EmptyText = "StudentsPickerEmptyText",
}

export const createStudentDataTestId = (student: Student) => {
  return `${StudentsPickerLocators.Student}-${student._id}`;
};

export const createOptionDataTestId = (student: Student) => {
  return `${StudentsPickerLocators.Option}-${student._id}`;
};

export const createDeleteIconDataTestId = (student: Student) => {
  return `${StudentsPickerLocators.DeleteStudent}-${student._id}`;
};
