import { ActivitySchema } from "@routine-support/domains";
import { Id } from "@routine-support/types";

export const filterActivityForStudent = (
  activity: ActivitySchema,
  studentId: Id
): boolean => {
  const isCommonActivity = !activity.students.length;

  if (isCommonActivity) {
    return true;
  }

  return activity.students.includes(studentId);
};
