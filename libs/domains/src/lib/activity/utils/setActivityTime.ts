import { Activity } from "@routine-support/domains";
import { parseTime } from "@routine-support/utils";

export const setActivityTime = (time: { start: string; end: string }, activity: Activity) => {
  activity.start = parseTime(time.start);
  activity.end = parseTime(time.end);
};
