import { ActivitiesGroup, Activity } from "@routine-support/domains";

export const shouldAddActivityToGroup = (
  group: ActivitiesGroup,
  activity: Activity
): boolean => {
  const isActivityStartInGroupPeriod =
    group.start <= activity.start && activity.start < group.end;
  const isActivityEndInGroupPeriod =
    group.start < activity.end && activity.end <= group.end;

  const isGroupStartInActivityPeriod =
    activity.start <= group.start && group.start < activity.end;
  const isGroupEndInActivityPeriod =
    activity.start < group.end && group.end <= activity.end;

  return (
    isActivityStartInGroupPeriod ||
    isActivityEndInGroupPeriod ||
    isGroupStartInActivityPeriod ||
    isGroupEndInActivityPeriod
  );
};
