import { Activity } from "@routine-support/domains";
import { Moment } from "moment";

export const repeatActivityThisYear = (
  activity: Activity,
  daysOfCurrentWeek: Moment[]
): Activity | undefined => {
  const newActivityDate = daysOfCurrentWeek.find((day) =>
    isSameDatesWithoutYear(day, activity.date)
  );

  if (newActivityDate && newActivityDate >= activity.date) {
    return { ...activity, date: newActivityDate };
  }

  return undefined;
};

const isSameDatesWithoutYear = (a: Moment, b: Moment) => {
  const SPECIAL_DATE = "29.02";
  const SPECIAL_DATE_YEAR_AFTER = "01.03";

  const is_a_leap = a.isLeapYear();
  const is_b_leap = b.isLeapYear();

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

const getDateStringWithoutYear = (date: Moment): string => {
  return date.format("DD.MM");
};
