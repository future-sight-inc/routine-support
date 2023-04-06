import { Activity } from "@routine-support/domains";
import { format, isLeapYear } from "date-fns";

export const repeatActivityThisYear = (
  activity: Activity,
  daysOfCurrentWeek: Date[]
): Activity | undefined => {
  const newActivityDate = daysOfCurrentWeek.find((day) =>
    isSameDatesWithoutYear(day, activity.date)
  );

  if (newActivityDate && newActivityDate >= activity.date) {
    return { ...activity, date: newActivityDate };
  }

  return undefined;
};

const isSameDatesWithoutYear = (a: Date, b: Date) => {
  const SPECIAL_DATE = "29.02";
  const SPECIAL_DATE_YEAR_AFTER = "01.03";

  const is_a_leap = isLeapYear(a)
  const is_b_leap = isLeapYear(b);

  if (is_a_leap && !is_b_leap) {
    if (getDateStringWithoutYear(a) === SPECIAL_DATE) {
      return getDateStringWithoutYear(b) === SPECIAL_DATE_YEAR_AFTER;
    }
  }

  if (!is_a_leap && is_b_leap) {
    if (getDateStringWithoutYear(b) === SPECIAL_DATE) {
      return getDateStringWithoutYear(a) === SPECIAL_DATE_YEAR_AFTER;
    }
  }

  return getDateStringWithoutYear(a) === getDateStringWithoutYear(b);
};

const getDateStringWithoutYear = (date: Date): string => {
  return format(date, "dd.MM");
};
