import { TIME_FORMAT } from "@routine-support/constants";
import { Moment } from "moment";

export const stringifyTime = (time: Moment): string => {
  return time.format(TIME_FORMAT);
};
