import { Moment } from "moment";
import { Activity, ActivityDto } from "../activity/types";
import { DateString, TimeRange } from '@routine-support/types'

export type YearNumber = number;
export type WeekNumber = number;

export type Day = {
  date: Moment;
  activities: Activity[];
};

export type DayDto = {
  date: DateString;
  activities: ActivityDto[];
};

export interface WeekDto {
  days: DayDto[];
  year: YearNumber;
  weekNumber: WeekNumber;
  weekInfo: WeekInfoDto;
}

export interface WeekInfoDto {
  timeRange: TimeRange;
  days: DateString[];
}

export type WeekInfo = {
  timeRange: TimeRange;
  days: Moment[];
};

export type DateInfo = {
  year: YearNumber;
  week: WeekNumber;
};

export type Week = {
  days: Day[];
  year: YearNumber;
  weekNumber: WeekNumber;
  weekInfo: WeekInfo;
};
