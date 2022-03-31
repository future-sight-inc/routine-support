import { ActivitySchema, Student } from "@routine-support/domains";

export const filterActivityForStudent = (
  activity: ActivitySchema,
  student: Student
): boolean => {
  if (activity.isCommon) {
    return true;
  }

  return activity.students.includes(student._id);
};
