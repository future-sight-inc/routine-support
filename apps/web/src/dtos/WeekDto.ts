import { YearNumber, WeekNumber } from "features/week/types";

import { DayDto } from "./DayDto";

export interface WeekDto {
  days: DayDto[];
  year: YearNumber;
  weekNumber: WeekNumber;
}
