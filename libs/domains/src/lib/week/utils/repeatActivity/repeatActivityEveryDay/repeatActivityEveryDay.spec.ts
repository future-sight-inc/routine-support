import {
  createMockActivityByDateString,
  createMockWeekFromDateStringArray,
} from "@routine-support/domains";
import {
  WEEK_BETWEEN_MONTHS,
  WEEK_BETWEEN_YEARS,
  WEEK_OF_MONTH,
} from "../../mocks";
import { repeatActivityEveryDay } from "./repeatActivityEveryDay";

describe("repeatActivityEveryDay: start of the week. Should repeat 7 times", () => {
  it("Week of month", () => {
    const activities = repeatActivityEveryDay(
      createMockActivityByDateString("07.03.2022"),
      createMockWeekFromDateStringArray(WEEK_OF_MONTH)
    );

    expect(activities).toHaveLength(7);
  });

  it("Week between months", () => {
    const activities = repeatActivityEveryDay(
      createMockActivityByDateString("28.02.2022"),
      createMockWeekFromDateStringArray(WEEK_BETWEEN_MONTHS)
    );

    expect(activities).toHaveLength(7);
  });

  it("Week between years", () => {
    const activities = repeatActivityEveryDay(
      createMockActivityByDateString("27.12.2021"),
      createMockWeekFromDateStringArray(WEEK_BETWEEN_YEARS)
    );

    expect(activities).toHaveLength(7);
  });
});

describe("repeatActivityEveryDay: 3rd day of the week. Should repeat 5 times", () => {
  it("Week of month", () => {
    const activities = repeatActivityEveryDay(
      createMockActivityByDateString("09.03.2022"),
      createMockWeekFromDateStringArray(WEEK_OF_MONTH)
    );

    expect(activities).toHaveLength(5);
  });

  it("Week between months", () => {
    const activities = repeatActivityEveryDay(
      createMockActivityByDateString("02.03.2022"),
      createMockWeekFromDateStringArray(WEEK_BETWEEN_MONTHS)
    );

    expect(activities).toHaveLength(5);
  });

  it("Week between years", () => {
    const activities = repeatActivityEveryDay(
      createMockActivityByDateString("29.12.2021"),
      createMockWeekFromDateStringArray(WEEK_BETWEEN_YEARS)
    );

    expect(activities).toHaveLength(5);
  });
});

describe("repeatActivityEveryDay: last day of the week. Should repeat 1 time", () => {
  it("Week of month", () => {
    const activities = repeatActivityEveryDay(
      createMockActivityByDateString("13.03.2022"),
      createMockWeekFromDateStringArray(WEEK_OF_MONTH)
    );

    expect(activities).toHaveLength(1);
  });

  it("Week between months", () => {
    const activities = repeatActivityEveryDay(
      createMockActivityByDateString("06.03.2022"),
      createMockWeekFromDateStringArray(WEEK_BETWEEN_MONTHS)
    );

    expect(activities).toHaveLength(1);
  });

  it("Week between years", () => {
    const activities = repeatActivityEveryDay(
      createMockActivityByDateString("02.01.2022"),
      createMockWeekFromDateStringArray(WEEK_BETWEEN_YEARS)
    );

    expect(activities).toHaveLength(1);
  });
});

describe("repeatActivityEveryDay: day before the week. Should repeat 7 times", () => {
  it("Week of month", () => {
    const activities = repeatActivityEveryDay(
      createMockActivityByDateString("06.03.2022"),
      createMockWeekFromDateStringArray(WEEK_OF_MONTH)
    );

    expect(activities).toHaveLength(7);
  });

  it("Week between months", () => {
    const activities = repeatActivityEveryDay(
      createMockActivityByDateString("27.02.2022"),
      createMockWeekFromDateStringArray(WEEK_BETWEEN_MONTHS)
    );

    expect(activities).toHaveLength(7);
  });

  it("Week between years", () => {
    const activities = repeatActivityEveryDay(
      createMockActivityByDateString("26.12.2021"),
      createMockWeekFromDateStringArray(WEEK_BETWEEN_YEARS)
    );

    expect(activities).toHaveLength(7);
  });
});

describe("repeatActivityEveryDay: day after the week. Should repeat 0 times", () => {
  it("Week of month", () => {
    const activities = repeatActivityEveryDay(
      createMockActivityByDateString("14.03.2022"),
      createMockWeekFromDateStringArray(WEEK_OF_MONTH)
    );

    expect(activities).toHaveLength(0);
  });

  it("Week between months", () => {
    const activities = repeatActivityEveryDay(
      createMockActivityByDateString("07.03.2022"),
      createMockWeekFromDateStringArray(WEEK_BETWEEN_MONTHS)
    );

    expect(activities).toHaveLength(0);
  });

  it("Week between years", () => {
    const activities = repeatActivityEveryDay(
      createMockActivityByDateString("03.01.2022"),
      createMockWeekFromDateStringArray(WEEK_BETWEEN_YEARS)
    );

    expect(activities).toHaveLength(0);
  });
});
