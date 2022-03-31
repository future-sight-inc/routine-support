import { Activity } from "@routine-support/domains";
import { compareActivitiesByTime } from "./compareActivitiesByTime";

export const sortActivitiesByTime = (activities: Activity[]): Activity[] => {
  return activities.sort((a, b) => compareActivitiesByTime(a, b));
};
