import moment = require("moment");

export const getDaysOfWeek = ({
  weekNumber,
  yearNumber,
}: {
  weekNumber: number;
  yearNumber: number;
}) => {
  const monday = moment().year(yearNumber).day("Monday").isoWeek(weekNumber);
  const days = [monday];

  for (let i = 1; i < 7; i++) {
    const day = moment(monday).add(i, "days");
    days.push(day);
  }

  return days;
};
