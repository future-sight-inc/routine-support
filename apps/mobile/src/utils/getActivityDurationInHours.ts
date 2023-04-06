import { Activity } from "@routine-support/domains";
import { getTimeInHours } from "@routine-support/utils";

export const getActivityDurationInHours = (activity: Activity) => {
  return getTimeInHours(activity.end) - getTimeInHours(activity.start);
};
