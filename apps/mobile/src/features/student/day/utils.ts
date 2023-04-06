import { Activity } from "@routine-support/domains";
import { stringifyDate } from "@routine-support/utils";

export const isActivityConfirmed = ({
  studentId = "",
  activity,
}: {
  studentId?: string;
  activity: Activity;
}): boolean => {
  const dateString = stringifyDate(activity.date);

  if (!activity.confirmation[dateString]) {
    return false;
  }

  return activity.confirmation[dateString].students.includes(studentId);
};
