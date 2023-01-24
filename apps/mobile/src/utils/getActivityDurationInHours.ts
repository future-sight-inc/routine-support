import { Activity } from "@routine-support/domains";

import { getTimeInHours } from "./getTimeInHours";

export const getActivityDurationInHours = (activity: Activity) => {
  return getTimeInHours(activity.end) - getTimeInHours(activity.start);
};
