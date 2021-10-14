import { Moment } from "moment";
import { TimeRange } from "types/main";

import { Day } from "../day/types";

export type YearNumber = number;
export type WeekNumber = number;

export type Week = {
  days: Day[];
  year: YearNumber;
  weekNumber: WeekNumber;
  weekInfo: WeekInfo;
};

export type WeekInfo = {
  timeRange: TimeRange;
  days: Moment[];
};

export type DateInfo = {
  year: YearNumber;
  week: WeekNumber;
};
