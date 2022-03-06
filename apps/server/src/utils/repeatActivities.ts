import { Activity } from "@routine-support/models";
import moment from "moment";
import { repeatActivity } from "./repeatActivity";

export const repeatActivities = (
  activities: Activity[],
  currentWeek: moment.Moment[]
): Activity[] => {
  let repeatedActivities = [];

  activities.forEach((activity) => {
    const repeatedActivity = repeatActivity(activity, currentWeek);

    if (repeatedActivity) {
      repeatedActivities = repeatedActivities.concat(repeatedActivity);
    }
  });

  return repeatedActivities;
};
