import * as moment from "moment";

// todo Resolve moment and commonjs issue
export const getDaysOfWeek = ({
  weekNumber,
  yearNumber,
}: {
  weekNumber: number;
  yearNumber: number;
}) => {
  const monday = (moment as any)()
    .year(yearNumber)
    .day("Monday")
    .isoWeek(weekNumber);
  const days = [monday];

  for (let i = 1; i < 7; i++) {
    const day = (moment as any)(monday).add(i, "days");
    days.push(day);
  }

  return days;
};
