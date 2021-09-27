import { Day } from '../day/types';

export type YearNumber = number;
export type WeekNumber = number;

export type Week = {
  days: Day[];
  year: YearNumber;
  weekNumber: WeekNumber;
};
