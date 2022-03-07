import moment from "moment";
import { DATE_FORMAT } from "../constants/DateFormat";

export const getDateStringRangeFromWeek = (weekNumber = 1, year: number) => {
  const result = [];

  const date = moment()
    .year(year)
    .isoWeek(weekNumber)
    .locale("ru")
    .startOf("week");

  let weekLength = 7;

  while (weekLength--) {
    result.push(date.format(DATE_FORMAT));
    date.add(1, "day");
  }

  return result;
};
