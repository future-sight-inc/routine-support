import { DateString } from "@routine-support/types";
import { parseDate } from "@routine-support/utils";

export const createMockWeekFromDateStringArray = (dates: DateString[]): Date[] => {
  return dates.map(parseDate);
};
