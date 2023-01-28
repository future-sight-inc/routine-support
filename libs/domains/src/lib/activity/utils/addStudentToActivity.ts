import { Activity, Student } from "@routine-support/domains";

export const addStudentToActivity = (
  activity: Activity,
  student: Student
): void => {
  const updatedStudents = activity.students;

  updatedStudents.push(student._id);
  activity.isCommon = false;
};
