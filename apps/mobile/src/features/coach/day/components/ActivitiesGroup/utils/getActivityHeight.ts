import { Activity } from "@routine-support/domains";

import { getActivityDurationInHours, getTimelineMargin } from "../../../utils";

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
