import { getDate } from "date-fns";

export const getDayNumbersFromWeek = (daysOfWeek: Date[]): number[] => {
  return daysOfWeek.map((day) => getDate(day));
};
