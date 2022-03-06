import {
  ActivitySchema,
  formatActivity,
  formatActivityDto,
} from "@routine-support/domains";
import moment from "moment";
import { repeatActivity } from "./repeatActivity";

export const repeatActivities = (
  activities: ActivitySchema[],
  currentWeek: moment.Moment[]
): ActivitySchema[] => {
  let repeatedActivities = [];

  activities.map(formatActivityDto).forEach((activity) => {
    const repeatedActivity = repeatActivity(activity, currentWeek);

    if (repeatedActivity) {
      repeatedActivities = repeatedActivities.concat(repeatedActivity);
    }
  });

  return repeatedActivities.map(formatActivity);
};
