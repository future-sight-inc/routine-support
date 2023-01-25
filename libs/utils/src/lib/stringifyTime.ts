import { Moment } from "moment";
import { TIME_FORMAT } from "./constants";

export const stringifyTime = (time: Moment): string => {
  return time.format(TIME_FORMAT);
};
