import { ActivitiesGroup, Activity } from "@routine-support/domains";

export const addActivityToGroup = (
  group: ActivitiesGroup,
  activity: Activity
) => {
  const shouldUpdateStart = activity.start <= group.start;
  const shouldUpdateEnd = activity.end >= group.end;

  if (shouldUpdateStart) {
    group.start = activity.start;
  }

  if (shouldUpdateEnd) {
    group.end = activity.end;
  }

  group.activities.push(activity);

  return group;
};
