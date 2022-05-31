import { ActivitySchema, Student } from "@routine-support/domains";

export const filterActivityForStudent = (
  activity: ActivitySchema,
  student: Pick<Student, "_id">
): boolean => {
  if (activity.isCommon) {
    return true;
  }

  return activity.students.includes(String(student._id));
};
