import { DateString } from "@routine-support/types";
import { stringifyDate } from "@routine-support/utils";
import { getDaysOfWeek } from "./getDaysOfWeek";

export const getDateStringRangeFromWeek = (weekInfo: {
  weekNumber: number;
  yearNumber: number;
}): DateString[] => {
  const daysOfWeek = getDaysOfWeek(weekInfo);

  return daysOfWeek.map(stringifyDate);
};
