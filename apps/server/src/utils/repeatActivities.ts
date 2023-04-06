import { Activity, repeatActivity } from "@routine-support/domains";

export const repeatActivities = (activities: Activity[], currentWeek: Date[]): Activity[] => {
  let repeatedActivities: Activity[] = [];

  activities.forEach((activity) => {
    const repeatedActivity = repeatActivity(activity, currentWeek);

    if (repeatedActivity) {
      repeatedActivities = repeatedActivities.concat(repeatedActivity);
    }
  });

  return repeatedActivities;
};
