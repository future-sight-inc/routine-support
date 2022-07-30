import { Activity, ActivitySchema } from "@routine-support/domains";
import { parseDate, parseTime } from "@routine-support/utils";

export const createActivityFromSchema = (activitySchema: ActivitySchema): Activity => {
  return {
    ...activitySchema,
    date: parseDate(activitySchema.date),
    start: parseTime(activitySchema.start, activitySchema.date),
    end: parseTime(activitySchema.end, activitySchema.date),
  };
};
