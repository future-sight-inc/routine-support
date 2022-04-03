import {
  createActivityFromSchema,
  Day,
  DaySchema,
} from "@routine-support/domains";
import { parseDate } from "@routine-support/utils";

export const createDayFromSchema = (daySchema: DaySchema): Day => {
  const day: Day = {
    date: parseDate(daySchema.date),
    activities: daySchema.activities.map(createActivityFromSchema),
  };

  return day;
};
