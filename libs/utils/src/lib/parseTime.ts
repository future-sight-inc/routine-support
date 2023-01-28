import { TimeString } from "@routine-support/types";
import { parse } from "date-fns";
import { TIME_FORMAT } from "./constants";

export const parseTime = (time: TimeString, baseDate?: Date): Date => {
  if (baseDate) {
    return parse(time, TIME_FORMAT, baseDate);
  } else {
    return parse(time, TIME_FORMAT, new Date());
  }
};
