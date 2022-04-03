import { Moment } from "moment";
import { DateString, Id, TimeRange } from "@routine-support/types";
import { Day, DaySchema } from "../day";

export type YearNumber = number;
export type WeekNumber = number;

export interface WeekDto {
  days: DaySchema[];
  weekInfo: WeekInfoDto;
}

export interface WeekInfoDto {
  year: YearNumber;
  weekNumber: WeekNumber;
  timeRange: TimeRange;
  days: DateString[];
}

export type WeekInfo = {
  year: YearNumber;
  weekNumber: WeekNumber;
  timeRange: TimeRange;
  days: Moment[];
};

export type DateInfo = {
  year: YearNumber;
  week: WeekNumber;
};

export type Week = {
  days: Day[];
  weekInfo: WeekInfo;
};

export type ActivityFilter = { [key: string]: boolean };

export type ActivityFilterQuery = (Id | "common")[];
