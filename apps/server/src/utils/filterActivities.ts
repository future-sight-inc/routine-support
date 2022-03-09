import { ActivityFilterQuery, ActivitySchema } from "@routine-support/domains";
import { filterActivity } from "./filterActivity";

export const filterActivities = (
  activities: ActivitySchema[],
  filter: ActivityFilterQuery = []
) => {
  return activities.filter((activity) => filterActivity(activity, filter));
};
