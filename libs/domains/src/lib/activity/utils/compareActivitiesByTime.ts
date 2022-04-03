import { Activity } from "@routine-support/domains";

export const compareActivitiesByTime = (a: Activity, b: Activity): number => {
  return a.start.unix() - b.start.unix();
};
