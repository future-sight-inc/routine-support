import { Moment } from "moment";
import { DateString, Id, TimeRange } from "@routine-support/types";
import { Day, DaySchema } from "../day";

export type YearNumber = number;
export type WeekNumber = number;

export type Week = {
  days: Day[];
  weekInfo: WeekInfo;
};

export interface WeekSchema {
  days: DaySchema[];
  weekInfo: WeekInfoSchema;
}

export type WeekInfo = {
  year: YearNumber;
  weekNumber: WeekNumber;
  timeRange: TimeRange;
  days: Moment[];
};

export interface WeekInfoSchema {
  year: YearNumber;
  weekNumber: WeekNumber;
  timeRange: TimeRange;
  days: DateString[];
}

export type DateInfo = {
  year: YearNumber;
  week: WeekNumber;
};

export type ActivityFilter = string[];

export type ActivityFilterQuery = Id[];

export enum WeekSocketEventTypeEnum { // todo move to features
  UpdateCalendar = "update calendar",
  UpdateNotifications = "update notifications",
  UpdateSchedule = "update schedule",
  UpdateSettings = "update settings",
}
