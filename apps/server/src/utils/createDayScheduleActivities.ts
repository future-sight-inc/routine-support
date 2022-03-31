import {
  Activity,
  ActivitySchema,
  formatActivityDto,
} from "@routine-support/domains";
import { groupActivities } from "@routine-support/utils";
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
