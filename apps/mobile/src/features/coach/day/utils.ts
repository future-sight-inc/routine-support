import { Activity as ActivityType } from "@routine-support/domains";
import { TIMELINE_MARGIN } from "apps/mobile/src/constants/TimelineMargin";
import { Moment } from "moment";

export const getActivityDurationInHours = (activity: ActivityType) => {
  return getTimeInHours(activity.end) - getTimeInHours(activity.start);
};

export const getTimeInHours = (time: Moment) => {
  return time.get("hours") + time.get("minutes") / 60;
};

export const getTimelineMargin = (time: Moment) => {
  return getTimeInHours(time) % 1 ? 0 : TIMELINE_MARGIN;
};
