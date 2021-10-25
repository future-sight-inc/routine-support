import { TIME_FORMAT } from "constants/TimeFormat";

import { Moment } from "moment";

export const stringifyTime = (time: Moment): string => {
  return time.format(TIME_FORMAT);
};
