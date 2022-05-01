import { ActivitiesGroup, Activity } from "@routine-support/domains";

export const makeGroupFromActivity = (activity: Activity): ActivitiesGroup => {
  const group: ActivitiesGroup = {
    start: activity.start.clone(),
    end: activity.end.clone(),
    activities: [activity],
  };

  return group;
};
