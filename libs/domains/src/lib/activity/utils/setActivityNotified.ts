import { Activity } from "@routine-support/domains";
import { stringifyDate } from "@routine-support/utils";

export const setActivityNotified = (activity: Activity, isNotified: boolean) => {
  const stringifiedDate = stringifyDate(activity.date);

  if (!activity.confirmation[stringifiedDate]) {
    activity.confirmation[stringifiedDate] = { students: [], isNotified };
  } else {
    activity.confirmation[stringifiedDate].isNotified = isNotified;
  }
};
