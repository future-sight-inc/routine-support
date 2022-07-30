import { Activity, getStudentsByIds, Student } from "@routine-support/domains";
import { stringifyDate } from "@routine-support/utils";

import { getPendingStudents } from "./getPendingStudents";

export const getActivityStatusesFromStudents = (
  activity: Activity,
  students: Student[]
): {
  confirmedStudents: Student[];
  assignedStudents: Student[];
  pendingStudents: Student[];
} => {
  let confirmedStudents: Student[] = [];
  let assignedStudents = students;

  if (!activity.isCommon) {
    assignedStudents = getStudentsByIds(students, activity.students);
  }

  confirmedStudents = getStudentsByIds(
    assignedStudents,
    activity.confirmation[stringifyDate(activity.date)]?.students
  );

  return {
    confirmedStudents,
    assignedStudents,
    pendingStudents: getPendingStudents(assignedStudents, confirmedStudents),
  };
};
