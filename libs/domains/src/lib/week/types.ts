import { TimeRange } from "@routine-support/types";
import { Day } from "../day";

export type Week = {
  days: Day[];
  weekInfo: WeekInfo;
};

export type WeekInfo = {
  year: number;
  weekNumber: number;
  timeRange: TimeRange;
  days: Date[];
};

export type DateInfo = {
  year: number;
  week: number;
};

export type ActivityFilter = string[];

export type ActivityFilterQuery = string[];

export enum WeekSocketEventTypeEnum { // todo move to features
  UpdateCalendar = "update calendar",
  UpdateNotifications = "update notifications",
  UpdateSchedule = "update schedule",
  UpdateSettings = "update settings",
}
