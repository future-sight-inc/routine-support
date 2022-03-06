import moment = require("moment");

export const getDateRangeFromWeek = ({
  weekNumber,
  yearNumber,
}: {
  weekNumber: number;
  yearNumber: number;
}) => {
  const MONDAY = moment().day("Monday").year(yearNumber).isoWeek(weekNumber);
  const DAYS = [MONDAY];

  for (let i = 1; i < 7; i++) {
    const DAY = moment(MONDAY).add(i, "days");
    DAYS.push(DAY);
  }

  return DAYS;
};
