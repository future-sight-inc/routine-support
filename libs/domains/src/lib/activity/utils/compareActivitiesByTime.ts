import { Activity } from "@routine-support/domains";
import { getUnixTime } from "date-fns";

export const compareActivitiesByTime = (a: Activity, b: Activity): number => {
  return getUnixTime(a.start) - getUnixTime(b.start);
};
