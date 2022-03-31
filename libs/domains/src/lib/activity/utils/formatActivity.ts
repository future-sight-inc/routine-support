import { Activity, ActivityDto } from "@routine-support/domains";
import { stringifyDate, stringifyTime } from "@routine-support/utils";

export const formatActivity = (activity: Activity): ActivityDto => {
  return {
    ...activity,
    date: stringifyDate(activity.date),
    start: stringifyTime(activity.start),
    end: stringifyTime(activity.end),
  };
};
