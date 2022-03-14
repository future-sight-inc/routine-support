import { getMondayFromWeekInfo } from "apps/web/src/utils/testUtils";

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

    expect(dateWeekAfter.week()).toBe(FIRST_WEEK_OF_YEAR.weekNumber + 1);
    expect(dateWeekAfter.year()).toBe(FIRST_WEEK_OF_YEAR.year);
  });

  it("Last week of year", () => {
    const date = getMondayFromWeekInfo(LAST_WEEK_OF_YEAR);
    const dateWeekAfter = addWeekToMoment(date);

    expect(dateWeekAfter.week()).toBe(1);
    expect(dateWeekAfter.year()).toBe(2023);
  });

  it("First week of month", () => {
    const date = getMondayFromWeekInfo(FIRST_WEEK_OF_MONTH);
    const dateWeekAfter = addWeekToMoment(date);

    expect(dateWeekAfter.week()).toBe(FIRST_WEEK_OF_MONTH.weekNumber + 1);
    expect(dateWeekAfter.month()).toBe(date.month());
  });

  it("Last week of month", () => {
    const date = getMondayFromWeekInfo(LAST_WEEK_OF_MONTH);
    const dateWeekAfter = addWeekToMoment(date);

    expect(dateWeekAfter.week()).toBe(LAST_WEEK_OF_MONTH.weekNumber + 1);
    expect(dateWeekAfter.month()).toBe(date.month() + 1);
  });
});

describe("subtractWeekFromMoment", () => {
  it("First week of year", () => {
    const date = getMondayFromWeekInfo(FIRST_WEEK_OF_YEAR);
    const dateWeekAfter = subtractWeekFromMoment(date);

    expect(dateWeekAfter.week()).toBe(52);
    expect(dateWeekAfter.year()).toBe(FIRST_WEEK_OF_YEAR.year - 1);
  });

  it("Last week of year", () => {
    const date = getMondayFromWeekInfo(LAST_WEEK_OF_YEAR);
    const dateWeekAfter = subtractWeekFromMoment(date);

    expect(dateWeekAfter.week()).toBe(LAST_WEEK_OF_YEAR.weekNumber - 1);
    expect(dateWeekAfter.year()).toBe(LAST_WEEK_OF_YEAR.year);
  });

  it("First week of month", () => {
    const date = getMondayFromWeekInfo(FIRST_WEEK_OF_MONTH);
    const dateWeekAfter = subtractWeekFromMoment(date);

    expect(dateWeekAfter.week()).toBe(FIRST_WEEK_OF_MONTH.weekNumber - 1);
    expect(dateWeekAfter.month()).toBe(date.month() - 1);
  });

  it("Last week of month", () => {
    const date = getMondayFromWeekInfo(LAST_WEEK_OF_MONTH);
    const dateWeekAfter = subtractWeekFromMoment(date);

    expect(dateWeekAfter.week()).toBe(LAST_WEEK_OF_MONTH.weekNumber - 1);
    expect(dateWeekAfter.month()).toBe(date.month());
  });
});
