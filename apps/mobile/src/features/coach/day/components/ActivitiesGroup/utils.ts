import { ActivitiesGroup, Activity } from "@routine-support/domains";

import { getActivityDurationInHours, getTimeInHours, getTimelineMargin } from "../../utils";

export const getActivitiesGroupTopOffset = ({
  group,
  rowHeight,
  rowIndex,
}: {
  group: ActivitiesGroup;
  rowHeight: number;
  rowIndex: number;
}) => {
  return rowHeight * (rowIndex + group.start.get("minutes") / 60) + rowIndex + 4;
};

export const getActivityHeight = ({
  activity,
  rowHeight,
}: {
  activity: Activity;
  rowHeight: number;
}) => {
  return (
    getActivityDurationInHours(activity) * rowHeight -
    getTimelineMargin(activity.end) -
    getTimelineMargin(activity.start)
  );
};

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
