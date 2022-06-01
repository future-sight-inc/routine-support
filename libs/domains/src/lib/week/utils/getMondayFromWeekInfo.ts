import moment, { Moment } from "moment";

export const getMondayFromWeekInfo = ({
  weekNumber,
  year,
}: {
  weekNumber: number;
  year: number;
}): Moment => {
  const monday = moment()
    .year(year)
    .week(weekNumber + 1)
    .day("Monday");

  return monday;
};
