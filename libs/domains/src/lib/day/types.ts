import { Activity, ActivitySchema } from "@routine-support/domains";
import { DateString, TimeString } from "@routine-support/types";
import { Moment } from "moment";

export type Day = {
  date: Moment;
  activities: Activity[];
  timeRange: TimeString[];
};

export type DaySchema = {
  date: DateString;
  activities: ActivitySchema[];
  timeRange: TimeString[];
};
