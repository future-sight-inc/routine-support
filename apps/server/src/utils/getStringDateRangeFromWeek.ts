import moment = require("moment");
import { DATE_FORMAT } from "../constants/DateFormat";

export const getStringDateRangeFromWeek = (weekNumber: number, year: number) => {
  const MONDAY = moment().day("Monday").year(year).isoWeek(weekNumber);
  const DAYS = [MONDAY];

  for (let i = 1; i < 7; i++) {
    const DAY = moment(MONDAY).add(i, "days");
    DAYS.push(DAY);
  }

  return DAYS.map((day) => day.format(DATE_FORMAT));
};
