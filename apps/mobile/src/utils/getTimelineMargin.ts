import { Moment } from "moment";

import { TIMELINE_MARGIN } from "../constants/TimelineMargin";
import { getTimeInHours } from "./getTimeInHours";

export const getTimelineMargin = (time: Moment) => {
  return getTimeInHours(time) % 1 ? 0 : TIMELINE_MARGIN;
};
