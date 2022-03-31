import {
  Activity,
  ActivitySchema,
  formatActivityDto,
  groupActivities,
} from "@routine-support/domains";
import { getHighPriorityActivityFromGroup } from "./getHighPriorityActivityFromGroup";

export const createDayScheduleActivities = (
  activities: ActivitySchema[]
): Activity[] => {
  const parsedActivities: Activity[] = activities.map(formatActivityDto);
  const groups = groupActivities(parsedActivities);

  return groups
    .map(getHighPriorityActivityFromGroup)
    .filter(Boolean) as Activity[];
};
