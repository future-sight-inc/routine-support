import { DateString } from "types/main";

import { ActivityDto } from "./ActivityDto";

export interface DayDto {
  date: DateString;
  activities: ActivityDto[];
}
