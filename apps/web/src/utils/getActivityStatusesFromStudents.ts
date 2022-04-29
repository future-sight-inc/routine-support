import { Activity, Student } from "@routine-support/domains";
import { stringifyDate } from "@routine-support/utils";

import { getPendingStudents } from "./getPendingStudents";
import { getStudentsByIds } from "./getStudentsByIds";

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

  confirmedStudents = getStudentsByIds(
    students,
    activity.confirmation[stringifyDate(activity.date)]
  );

  if (activity.students.length) {
    assignedStudents = getStudentsByIds(students, activity.students);
  }

  return {
    confirmedStudents,
    assignedStudents,
    pendingStudents: getPendingStudents(assignedStudents, confirmedStudents),
  };
};
