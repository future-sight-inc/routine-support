import { ActivitySchema } from "@routine-support/domains";

export const setActivityNotified = (activity: ActivitySchema, isNotified: boolean) => {
  if (!activity.confirmation[activity.date]) {
    activity.confirmation[activity.date] = { students: [], isNotified };
  } else {
    activity.confirmation[activity.date].isNotified = isNotified;
  }
};
