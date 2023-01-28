
import { getTimeInHours } from "@routine-support/utils";

import { TIMELINE_MARGIN } from "../constants/TimelineMargin";

export const getTimelineMargin = (time: Date) => {
  return getTimeInHours(time) % 1 ? 0 : TIMELINE_MARGIN;
};
