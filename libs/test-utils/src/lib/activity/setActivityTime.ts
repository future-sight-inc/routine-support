import { ActivitySchema } from "@routine-support/domains";

export const setActivityTime = (
  time: { start: string; end: string },
  activity: ActivitySchema
) => {
  activity.start = time.start;
  activity.end = time.end;
};
