import {
  Activity,
  ActivitySchema,
  createActivityFromSchema,
  createSchemaFromActivity,
  repeatActivity,
} from "@routine-support/domains";
import { Moment } from "moment";

export const repeatActivities = (
  activities: ActivitySchema[],
  currentWeek: Moment[]
): ActivitySchema[] => {
  let repeatedActivities: Activity[] = [];

  activities.map(createActivityFromSchema).forEach((activity) => {
    const repeatedActivity = repeatActivity(activity, currentWeek);

    if (repeatedActivity) {
      repeatedActivities = repeatedActivities.concat(repeatedActivity);
    }
  });

  return repeatedActivities.map(createSchemaFromActivity);
};
