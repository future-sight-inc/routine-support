import { getDaysOfWeek } from "@routine-support/domains";
import { DateString } from "@routine-support/types";
import { stringifyDate } from "@routine-support/utils";

export const getDateStringRangeFromWeek = (weekInfo: {
  week: number;
  year: number;
}): DateString[] => {
  const daysOfWeek = getDaysOfWeek(weekInfo);

  return daysOfWeek.map(stringifyDate);
};
