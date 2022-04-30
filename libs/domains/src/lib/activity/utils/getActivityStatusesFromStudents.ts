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

  confirmedStudents = getStudentsByIds(
    students,
    activity.confirmation[stringifyDate(activity.date)]?.students
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
