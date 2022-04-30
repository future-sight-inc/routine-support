import { stringifyDate } from "@routine-support/utils";

import {
  DATE_SHORT_MONTH,
  DATE_STANDARD,
  DATE_WEEK_BETWEEN_MONTHS_BEGIN,
  DATE_WEEK_BETWEEN_MONTHS_END,
  DATE_WEEK_BETWEEN_YEARS_BEGIN,
  DATE_WEEK_BETWEEN_YEARS_END,
  WEEKS_DECEMBER_2022,
  WEEKS_FEBRUARY_2021,
  WEEKS_FEBRUARY_2022,
  WEEKS_JANUARY_2023,
} from "./mocks";
import { getWeeksOfCalendar } from "./utils";

describe("getWeeksOfCalendar", () => {
  it("weeks for 14 february 2022", () => {
    expect(
      getWeeksOfCalendar(DATE_STANDARD).map((week) =>
        week.map((day) => stringifyDate(day))
      )
    ).toStrictEqual(WEEKS_FEBRUARY_2022);
  });

  it("weeks for 01 february 2022", () => {
    expect(
      getWeeksOfCalendar(DATE_WEEK_BETWEEN_MONTHS_BEGIN).map((week) =>
        week.map((day) => stringifyDate(day))
      )
    ).toStrictEqual(WEEKS_FEBRUARY_2022);
  });
  it("weeks for 28 february 2022", () => {
    expect(
      getWeeksOfCalendar(DATE_WEEK_BETWEEN_MONTHS_END).map((week) =>
        week.map((day) => stringifyDate(day))
      )
    ).toStrictEqual(WEEKS_FEBRUARY_2022);
  });
  it("weeks for 01 january 2023", () => {
    expect(
      getWeeksOfCalendar(DATE_WEEK_BETWEEN_YEARS_BEGIN).map((week) =>
        week.map((day) => stringifyDate(day))
      )
    ).toStrictEqual(WEEKS_JANUARY_2023);
  });
  it("weeks for 31 december 2022", () => {
    expect(
      getWeeksOfCalendar(DATE_WEEK_BETWEEN_YEARS_END).map((week) =>
        week.map((day) => stringifyDate(day))
      )
    ).toStrictEqual(WEEKS_DECEMBER_2022);
  });
  it("weeks for 14 february 2021 - 4 weeks month", () => {
    expect(
      getWeeksOfCalendar(DATE_SHORT_MONTH).map((week) =>
        week.map((day) => stringifyDate(day))
      )
    ).toStrictEqual(WEEKS_FEBRUARY_2021);
  });
});
