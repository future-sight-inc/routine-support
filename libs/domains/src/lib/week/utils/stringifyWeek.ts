import { stringifyDate } from "@routine-support/utils";
import { stringifyDay } from "../../day";
import { Week, WeekJson } from "../types";

export const stringifyWeek = (week: Week): WeekJson => {
  return {
    ...week,
    days: week.days.map(stringifyDay),
    weekInfo: {
      ...week.weekInfo,
      days: week.weekInfo.days.map(stringifyDate),
    },
  };
};
