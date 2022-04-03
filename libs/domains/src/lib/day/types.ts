import { Activity, ActivitySchema } from "@routine-support/domains";
import { DateString } from "@routine-support/types";
import { Moment } from "moment";

export type Day = {
  date: Moment;
  activities: Activity[];
};

export type DayDto = {
  date: DateString;
  activities: ActivitySchema[];
};
