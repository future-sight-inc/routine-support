import { DateInfo } from "@routine-support/domains";
import { addDays, setISOWeek, setYear, startOfISOWeek } from "date-fns";

export const getDaysOfWeek = ({ week, year }: DateInfo): Date[] => {
  const monday = startOfISOWeek(setISOWeek(setYear(new Date(), year), week));
  const days = [monday];

  for (let i = 1; i < 7; i++) {
    const day = addDays(monday, i);

    days.push(day);
  }

  return days;
};
