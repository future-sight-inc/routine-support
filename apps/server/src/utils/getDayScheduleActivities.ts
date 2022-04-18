import {
  Activity,
  groupActivities,
  sortActivitiesByTime,
} from "@routine-support/domains";
import { getHighPriorityActivityFromGroup } from "./getHighPriorityActivityFromGroup";

export const getDayScheduleActivities = (
  activities: Activity[]
): Activity[] => {
  const groups = groupActivities(activities);

  const unsortedScheduleActivities: Activity[] = [];

  groups.forEach((group) => {
    const activity = getHighPriorityActivityFromGroup(group);

    if (activity) {
      unsortedScheduleActivities.push(activity);
    }
  });

  return sortActivitiesByTime(unsortedScheduleActivities);
};
