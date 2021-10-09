import { YearNumber, WeekNumber } from "features/week/types";

import { DayDto } from "./DayDto";
import { WeekInfoDto } from "./WeekInfoDto";

export interface WeekDto {
  days: DayDto[];
  year: YearNumber;
  weekNumber: WeekNumber;
  weekInfo: WeekInfoDto;
}
