import { Moment } from "moment";

export const getDayNumbersFromWeek = (daysOfWeek: Moment[]): number[] => {
  return daysOfWeek.map((day) => day.date());
};
