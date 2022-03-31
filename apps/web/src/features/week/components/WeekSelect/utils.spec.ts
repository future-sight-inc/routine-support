import { getMondayFromWeekInfo } from "@routine-support/test-utils";

import { addWeekToMoment, subtractWeekFromMoment } from "./utils";

const FIRST_WEEK_OF_YEAR = {
  weekNumber: 1,
  year: 2022,
};

const LAST_WEEK_OF_YEAR = {
  weekNumber: 52,
  year: 2022,
};

const FIRST_WEEK_OF_MONTH = {
  weekNumber: 31,
  year: 2022,
};

const LAST_WEEK_OF_MONTH = {
  weekNumber: 35,
  year: 2022,
};

describe("addWeekToMoment", () => {
  it("First week of year", () => {
    const date = getMondayFromWeekInfo(FIRST_WEEK_OF_YEAR);
    const dateWeekAfter = addWeekToMoment(date);

    expect(dateWeekAfter.isoWeek()).toBe(FIRST_WEEK_OF_YEAR.weekNumber + 1);
    expect(dateWeekAfter.year()).toBe(FIRST_WEEK_OF_YEAR.year);
  });

  it("Last week of year", () => {
    const date = getMondayFromWeekInfo(LAST_WEEK_OF_YEAR);
    const dateWeekAfter = addWeekToMoment(date);

    expect(dateWeekAfter.isoWeek()).toBe(1);
    expect(dateWeekAfter.year()).toBe(2023);
  });

  it("First week of month", () => {
    const date = getMondayFromWeekInfo(FIRST_WEEK_OF_MONTH);
    const dateWeekAfter = addWeekToMoment(date);

    expect(dateWeekAfter.isoWeek()).toBe(FIRST_WEEK_OF_MONTH.weekNumber + 1);
    expect(dateWeekAfter.month()).toBe(date.month());
  });

  it("Last week of month", () => {
    const date = getMondayFromWeekInfo(LAST_WEEK_OF_MONTH);
    const dateWeekAfter = addWeekToMoment(date);

    expect(dateWeekAfter.isoWeek()).toBe(LAST_WEEK_OF_MONTH.weekNumber + 1);
    expect(dateWeekAfter.month()).toBe(date.month() + 1);
  });
});

describe("subtractWeekFromMoment", () => {
  it("First week of year", () => {
    const date = getMondayFromWeekInfo(FIRST_WEEK_OF_YEAR);
    const dateWeekBefore = subtractWeekFromMoment(date);
    const WEEKS_IN_2021 = 52;

    expect(dateWeekBefore.isoWeek()).toBe(WEEKS_IN_2021);
    expect(dateWeekBefore.year()).toBe(FIRST_WEEK_OF_YEAR.year - 1);
  });

  it("Last week of year", () => {
    const date = getMondayFromWeekInfo(LAST_WEEK_OF_YEAR);
    const dateWeekBefore = subtractWeekFromMoment(date);

    expect(dateWeekBefore.isoWeek()).toBe(LAST_WEEK_OF_YEAR.weekNumber - 1);
    expect(dateWeekBefore.year()).toBe(LAST_WEEK_OF_YEAR.year);
  });

  it("First week of month", () => {
    const date = getMondayFromWeekInfo(FIRST_WEEK_OF_MONTH);
    const dateWeekBefore = subtractWeekFromMoment(date);

    expect(dateWeekBefore.isoWeek()).toBe(FIRST_WEEK_OF_MONTH.weekNumber - 1);
    expect(dateWeekBefore.month()).toBe(date.month() - 1);
  });

  it("Last week of month", () => {
    const date = getMondayFromWeekInfo(LAST_WEEK_OF_MONTH);
    const dateWeekBefore = subtractWeekFromMoment(date);

    expect(dateWeekBefore.isoWeek()).toBe(LAST_WEEK_OF_MONTH.weekNumber - 1);
    expect(dateWeekBefore.month()).toBe(date.month());
  });
});
