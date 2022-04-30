import { Activity } from "@routine-support/domains";
import { Id } from "@routine-support/types";
import { stringifyDate } from "@routine-support/utils";

export const isActivityConfirmed = ({
  studentId = "",
  activity,
}: {
  studentId?: Id;
  activity: Activity;
}): boolean => {
  const dateString = stringifyDate(activity.date);

  if (!activity.confirmation[dateString]) {
    return false;
  }

  return activity.confirmation[dateString].students.includes(studentId);
};
