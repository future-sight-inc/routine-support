import {
  Activity,
  ActivitySchema,
  createSchemaFromActivity,
  createSchemaFromActivityDto
} from "@routine-support/domains";
import { Moment } from "moment";
import { repeatActivity } from "./repeatActivity";

export const repeatActivities = (
  activities: ActivitySchema[],
  currentWeek: Moment[]
): ActivitySchema[] => {
  let repeatedActivities: Activity[] = [];

  activities.map(createSchemaFromActivityDto).forEach((activity) => {
    const repeatedActivity = repeatActivity(activity, currentWeek);

    if (repeatedActivity) {
      repeatedActivities = repeatedActivities.concat(repeatedActivity);
    }
  });

  return repeatedActivities.map(createSchemaFromActivity);
};
