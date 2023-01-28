import { Activity } from "@routine-support/domains";

export type Day = {
  date: Date;
  activities: Activity[];
  timeRange: string[];
};
