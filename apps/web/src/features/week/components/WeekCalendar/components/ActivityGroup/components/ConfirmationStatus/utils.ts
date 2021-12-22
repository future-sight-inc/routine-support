import { Student } from "@routine-support/domains";
import { Id } from "@routine-support/types";

export const getStudentsByIds = (students?: Student[], ids?: Id[]): Student[] => {
  if (students?.length && ids?.length) {
    return ids
      .map((id) => students.find((student) => student._id === id)!)
      .filter(Boolean);
  }

  return [];
};
