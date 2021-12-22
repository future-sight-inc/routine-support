import moment = require("moment");
import { DATE_FORMAT } from "../constants/DateFormat";

export const getStringDateRangeFromWeek = (
  weekNumber: number,
  year: number
) => {
  const result = [];

  const date = moment()
    .year(year)
    .isoWeek(weekNumber || 1)
    .locale("ru")
    .startOf("week");

  let weekLength = 7;

  while (weekLength--) {
    result.push(date.format(DATE_FORMAT));
    date.add(1, "day");
  }

  return result;
};
