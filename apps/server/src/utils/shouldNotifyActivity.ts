import {
  ActivitySchema,
  createActivityFromSchema,
  getActivityStatusesFromStudents,
  Student,
} from "@routine-support/domains";

export const shouldNotifyActivity = (
  activity: ActivitySchema,
  students: Student[]
): boolean => {
  const { pendingStudents } = getActivityStatusesFromStudents(
    createActivityFromSchema(activity),
    students
  );

  return (
    pendingStudents.length > 0 &&
    !activity.confirmation[activity.date]?.isNotified
  );
};
