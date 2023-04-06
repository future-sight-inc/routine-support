import { Activity, Student } from "@routine-support/domains";

export const filterActivityForStudent = (
  activity: Activity,
  student: Pick<Student, "_id">
): boolean => {
  if (activity.isCommon) {
    return true;
  }

  return activity.students.includes(student._id);
};
