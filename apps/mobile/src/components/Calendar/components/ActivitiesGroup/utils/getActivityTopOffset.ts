import { ActivitiesGroup, Activity } from "@routine-support/domains";
import { getTimeInHours } from "@routine-support/utils";

export const getActivityTopOffset = ({
  activity,
  group,
  rowHeight,
}: {
  activity: Activity;
  group: ActivitiesGroup;
  rowHeight: number;
}) => {
  return (getTimeInHours(activity.start) - getTimeInHours(group.start)) * rowHeight;
};
