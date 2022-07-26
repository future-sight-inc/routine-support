import { Activity, getStudentsByIds, Student } from "@routine-support/domains";
import {
  COMMON_ACTIVITY_COLOR,
  GROUP_ACTIVITY_COLOR,
  IMPORTANT_ACTIVITY_COLOR,
} from "../constants";

import { getColor } from "./getColor";

export const getActivityColor = (activity: Activity, students: Student[]) => {
  if (activity.students.length === 1) {
    const student = getStudentsByIds(students, activity.students)[0];

    if (student) {
      return getColor(student.color);
    }
  }

  if (activity.students.length > 1) {
    return GROUP_ACTIVITY_COLOR;
  }

  if (activity.isImportant) {
    return IMPORTANT_ACTIVITY_COLOR;
  }

  return COMMON_ACTIVITY_COLOR;
};
