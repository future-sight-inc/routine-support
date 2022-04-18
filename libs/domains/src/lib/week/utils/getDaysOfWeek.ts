import { DateInfo } from "@routine-support/domains";
import moment, { Moment } from "moment";

export const getDaysOfWeek = ({ week, year }: DateInfo): Moment[] => {
  const monday = moment().year(year).day("Monday").isoWeek(week);
  const days = [monday];

  for (let i = 1; i < 7; i++) {
    const day = moment(monday).add(i, "days");

    days.push(day);
  }

  return days;
};
