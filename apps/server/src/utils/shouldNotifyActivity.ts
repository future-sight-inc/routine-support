import { Activity, getActivityStatusesFromStudents, Student } from "@routine-support/domains";
import { stringifyDate } from "@routine-support/utils";

export const shouldNotifyActivity = (activity: Activity, students: Student[]): boolean => {
  const { pendingStudents } = getActivityStatusesFromStudents(activity, students);
  const currentTime = new Date();

  return (
    pendingStudents.length > 0 &&
    !activity.confirmation[stringifyDate(activity.date)]?.isNotified &&
    currentTime >= activity.end
  );
};
