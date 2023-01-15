import { Activity } from "@routine-support/domains";
import { getActivityDurationInHours } from "apps/mobile/src/utils/getActivityDurationInHours";
import { getTimelineMargin } from "apps/mobile/src/utils/getTimelineMargin";

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
