import { WeekInfo, WeekInfoSchema } from "@routine-support/domains";
import { parseDate } from "@routine-support/utils";

export const createWeekInfoFromSchema = (
  weekInfoSchema: WeekInfoSchema
): WeekInfo => {
  const weekInfo: WeekInfo = {
    ...weekInfoSchema,
    days: weekInfoSchema.days.map((day) => parseDate(day)),
    timeRange: weekInfoSchema.timeRange,
  };

  return weekInfo;
};
