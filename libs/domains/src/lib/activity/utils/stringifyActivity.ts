import { stringifyDate } from "@routine-support/utils";
import { Activity, ActivityJson } from "../types";

export const stringifyActivity = (activity: Activity): ActivityJson => {
  return {
    ...activity,
    date: stringifyDate(activity.date),
    start: stringifyDate(activity.start),
    end: stringifyDate(activity.end),
  };
};
