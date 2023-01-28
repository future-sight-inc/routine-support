import { Activity, ActivityFilterQuery } from "@routine-support/domains";
import { filterActivity } from "./filterActivity";

export const filterActivities = (
  activities: Activity[],
  filter: ActivityFilterQuery = []
): Activity[] => {
  return activities.filter((activity) => filterActivity(activity, filter));
};
