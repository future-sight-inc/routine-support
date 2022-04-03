import { Activity, ActivitySchema } from "@routine-support/domains";
import { stringifyDate, stringifyTime } from "@routine-support/utils";

export const createSchemaFromActivity = (
  activity: Activity
): ActivitySchema => {
  return {
    ...activity,
    date: stringifyDate(activity.date),
    start: stringifyTime(activity.start),
    end: stringifyTime(activity.end),
  };
};
