import { Student } from "@routine-support/domains";

export enum ConfirmationStatusLocatorsEnum {
  Wrapper = "ConfirmationStatusWrapper",
  Counter = "ConfirmationStatusCounter",
  ModalContent = "ConfirmationStatusModalContent",
  PendingStudentWrapper = "ConfirmationPendingStudentsWrapper",
  PendingStudent = "ConfirmationStatusPendingStudent",
  ConfirmedStudent = "ConfirmationStatusConfirmedStudent",
}

export const createPendingStudentDataTestId = (student: Student) => {
  return `${ConfirmationStatusLocatorsEnum.PendingStudent}-${student._id}`;
};

export const createConfirmedStudentDataTestId = (student: Student) => {
  return `${ConfirmationStatusLocatorsEnum.ConfirmedStudent}-${student._id}`;
};
