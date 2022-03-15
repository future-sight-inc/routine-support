import { Activity, Student } from "@routine-support/domains";

import { DEFAULT_ACTIVITY_COLOR } from "../constants/defaultActivityColor";

export const getActivityColor = (activity: Activity, students: Student[]) => {
  const firstFoundStudentId: string | undefined = activity.students[0];
  const firstFoundStudent: Student | undefined = students.find(
    (student) => student._id === firstFoundStudentId
  );
  const firstFoundColor: string | undefined = firstFoundStudent?.color;

  return firstFoundColor || DEFAULT_ACTIVITY_COLOR;
};
