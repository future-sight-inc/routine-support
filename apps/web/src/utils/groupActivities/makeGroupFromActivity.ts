import { ActivitiesGroup, Activity } from "@routine-support/domains";

export const makeGroupFromActivity = (activity: Activity): ActivitiesGroup => {
  const group: ActivitiesGroup = {
    start: activity.start,
    end: activity.end,
    activities: [activity],
  };

  return group;
};
