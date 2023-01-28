import { stringifyDate, stringifyTime } from "@routine-support/utils";
import { Activity, ActivityJson } from "../types";

export const stringifyActivity = (activity: Activity): ActivityJson => {
  return {
    ...activity,
    date: stringifyDate(activity.date),
    start: stringifyTime(activity.start),
    end: stringifyTime(activity.end),
  };
};
