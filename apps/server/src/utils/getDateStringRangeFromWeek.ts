import { getDaysOfWeek } from "@routine-support/domains";
import { stringifyDate } from "@routine-support/utils";

export const getDateStringRangeFromWeek = (weekInfo: {
  week: number;
  year: number;
}): string[] => {
  const daysOfWeek = getDaysOfWeek(weekInfo);

  return daysOfWeek.map(stringifyDate);
};
