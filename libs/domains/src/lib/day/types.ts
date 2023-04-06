import { Activity, ActivityJson } from "@routine-support/domains";

export type Day = {
  date: Date;
  activities: Activity[];
  timeRange: string[];
};

export type DayJson = Omit<Day, "date" | "activities"> & {
  date: string;
  activities: ActivityJson[];
};
