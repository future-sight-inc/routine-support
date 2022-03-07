import {
  WEEK_BETWEEN_MONTHS,
  WEEK_BETWEEN_YEARS,
  WEEK_OF_MONTH,
} from "../../mocks";
import {
  createMockActivityByDateString,
  createMockWeekFormDateStringArray,
  getDayNameFromActivity,
} from "../../testUtils";
import { repeatActivityThisWeek } from "./repeatActivityThisWeek";

describe("repeatActivityThisWeek: day of the current week. Should be Monday", () => {
  it("Week of month", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("07.03.2022"),
      createMockWeekFormDateStringArray(WEEK_OF_MONTH)
    );

    expect(getDayNameFromActivity(activity)).toBe("Monday");
  });

  it("Week between months", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("28.02.2022"),
      createMockWeekFormDateStringArray(WEEK_BETWEEN_MONTHS)
    );

    expect(getDayNameFromActivity(activity)).toBe("Monday");
  });

  it("Week between years", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("27.12.2021"),
      createMockWeekFormDateStringArray(WEEK_BETWEEN_YEARS)
    );

    expect(getDayNameFromActivity(activity)).toBe("Monday");
  });
});

describe("repeatActivityThisWeek: day of the current week. Should be Wednesday", () => {
  it("Week of month", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("09.03.2022"),
      createMockWeekFormDateStringArray(WEEK_OF_MONTH)
    );

    expect(getDayNameFromActivity(activity)).toBe("Wednesday");
  });

  it("Week between months", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("02.03.2022"),
      createMockWeekFormDateStringArray(WEEK_BETWEEN_MONTHS)
    );

    expect(getDayNameFromActivity(activity)).toBe("Wednesday");
  });

  it("Week between years", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("29.12.2021"),
      createMockWeekFormDateStringArray(WEEK_BETWEEN_YEARS)
    );

    expect(getDayNameFromActivity(activity)).toBe("Wednesday");
  });
});

describe("repeatActivityThisWeek: day of the current week. Should be Sunday", () => {
  it("Week of month", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("13.03.2022"),
      createMockWeekFormDateStringArray(WEEK_OF_MONTH)
    );

    expect(getDayNameFromActivity(activity)).toBe("Sunday");
  });

  it("Week between months", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("06.03.2022"),
      createMockWeekFormDateStringArray(WEEK_BETWEEN_MONTHS)
    );

    expect(getDayNameFromActivity(activity)).toBe("Sunday");
  });

  it("Week between years", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("02.01.2022"),
      createMockWeekFormDateStringArray(WEEK_BETWEEN_YEARS)
    );

    expect(getDayNameFromActivity(activity)).toBe("Sunday");
  });
});

describe("repeatActivityThisWeek: Monday of the previous week. Should be Monday", () => {
  it("Week of month", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("28.02.2022"),
      createMockWeekFormDateStringArray(WEEK_OF_MONTH)
    );

    expect(getDayNameFromActivity(activity)).toBe("Monday");
  });

  it("Week between months", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("21.02.2022"),
      createMockWeekFormDateStringArray(WEEK_BETWEEN_MONTHS)
    );

    expect(getDayNameFromActivity(activity)).toBe("Monday");
  });

  it("Week between years", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("20.12.2021"),
      createMockWeekFormDateStringArray(WEEK_BETWEEN_YEARS)
    );

    expect(getDayNameFromActivity(activity)).toBe("Monday");
  });
});

describe("repeatActivityThisWeek: Wednesday of the previous week. Should be Wednesday", () => {
  it("Week of month", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("02.03.2022"),
      createMockWeekFormDateStringArray(WEEK_OF_MONTH)
    );

    expect(getDayNameFromActivity(activity)).toBe("Wednesday");
  });

  it("Week between months", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("23.02.2022"),
      createMockWeekFormDateStringArray(WEEK_BETWEEN_MONTHS)
    );

    expect(getDayNameFromActivity(activity)).toBe("Wednesday");
  });

  it("Week between years", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("29.12.2021"),
      createMockWeekFormDateStringArray(WEEK_BETWEEN_YEARS)
    );

    expect(getDayNameFromActivity(activity)).toBe("Wednesday");
  });
});

describe("repeatActivityThisWeek: Sunday of the previous week. Should be Sunday", () => {
  it("Week of month", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("06.03.2022"),
      createMockWeekFormDateStringArray(WEEK_OF_MONTH)
    );

    expect(getDayNameFromActivity(activity)).toBe("Sunday");
  });

  it("Week between months", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("27.02.2022"),
      createMockWeekFormDateStringArray(WEEK_BETWEEN_MONTHS)
    );

    expect(getDayNameFromActivity(activity)).toBe("Sunday");
  });

  it("Week between years", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("26.12.2021"),
      createMockWeekFormDateStringArray(WEEK_BETWEEN_YEARS)
    );

    expect(getDayNameFromActivity(activity)).toBe("Sunday");
  });
});

describe("repeatActivityThisWeek: Monday of the next week. Should be undefined", () => {
  it("Week of month", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("14.03.2022"),
      createMockWeekFormDateStringArray(WEEK_OF_MONTH)
    );

    expect(activity).toBe(undefined);
  });

  it("Week between months", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("07.03.2022"),
      createMockWeekFormDateStringArray(WEEK_BETWEEN_MONTHS)
    );

    expect(activity).toBe(undefined);
  });

  it("Week between years", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("03.01.2022"),
      createMockWeekFormDateStringArray(WEEK_BETWEEN_YEARS)
    );

    expect(activity).toBe(undefined);
  });
});

describe("repeatActivityThisWeek: Wednesday of the next week. Should be undefined", () => {
  it("Week of month", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("16.03.2022"),
      createMockWeekFormDateStringArray(WEEK_OF_MONTH)
    );

    expect(activity).toBe(undefined);
  });

  it("Week between months", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("09.03.2022"),
      createMockWeekFormDateStringArray(WEEK_BETWEEN_MONTHS)
    );

    expect(activity).toBe(undefined);
  });

  it("Week between years", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("05.01.2022"),
      createMockWeekFormDateStringArray(WEEK_BETWEEN_YEARS)
    );

    expect(activity).toBe(undefined);
  });
});

describe("repeatActivityThisWeek: Sunday of the next week. Should be undefined", () => {
  it("Week of month", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("20.03.2022"),
      createMockWeekFormDateStringArray(WEEK_OF_MONTH)
    );

    expect(activity).toBe(undefined);
  });

  it("Week between months", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("13.03.2022"),
      createMockWeekFormDateStringArray(WEEK_BETWEEN_MONTHS)
    );

    expect(activity).toBe(undefined);
  });

  it("Week between years", () => {
    const activity = repeatActivityThisWeek(
      createMockActivityByDateString("09.01.2022"),
      createMockWeekFormDateStringArray(WEEK_BETWEEN_YEARS)
    );

    expect(activity).toBe(undefined);
  });
});
