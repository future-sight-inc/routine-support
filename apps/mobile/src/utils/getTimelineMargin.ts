
import { TIMELINE_MARGIN } from "../constants/TimelineMargin";
import { getTimeInHours } from "./getTimeInHours";

export const getTimelineMargin = (time: Date) => {
  return getTimeInHours(time) % 1 ? 0 : TIMELINE_MARGIN;
};
