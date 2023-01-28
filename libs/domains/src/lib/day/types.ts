import { Activity } from "@routine-support/domains";
import { TimeString } from "@routine-support/types";

export type Day = {
  date: Date;
  activities: Activity[];
  timeRange: TimeString[];
};
