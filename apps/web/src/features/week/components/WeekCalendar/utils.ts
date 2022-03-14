import { Moment } from "moment";

export const isWeekend = (day: Moment) => {
  const WEEKEND_DAY_NUMBERS = [6, 7];

  return WEEKEND_DAY_NUMBERS.includes(day.isoWeekday());
};
