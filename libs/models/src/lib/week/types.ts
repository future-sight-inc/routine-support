import { Moment } from "moment";
import { DateString, TimeRange } from "@routine-support/types";
import { Day, DayDto } from "../day";

export type YearNumber = number;
export type WeekNumber = number;

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

export type ActivityFilter = { [key: string]: boolean };
