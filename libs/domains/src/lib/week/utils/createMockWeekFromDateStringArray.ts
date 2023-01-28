import { parseDate } from "@routine-support/utils";

export const createMockWeekFromDateStringArray = (dates: string[]): Date[] => {
  return dates.map(parseDate);
};
