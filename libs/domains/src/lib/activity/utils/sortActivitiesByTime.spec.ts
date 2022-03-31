import { createMockActivityFromTimePeriod } from "@routine-support/test-utils";
import { sortActivitiesByTime } from "./sortActivitiesByTime";

const ONE_PM_ACTIVITY = createMockActivityFromTimePeriod({
  start: "13:00",
  end: "14:00",
});
const TWO_PM_ACTIVITY = createMockActivityFromTimePeriod({
  start: "14:00",
  end: "15:00",
});
const TWO_PM_ACTIVITY_SECOND = createMockActivityFromTimePeriod({
  start: "14:00",
  end: "15:00",
});
const THREE_PM_ACTIVITY = createMockActivityFromTimePeriod({
  start: "15:00",
  end: "16:00",
});
const REGULAR_UNSORTED_ACTIVITIES = [
  TWO_PM_ACTIVITY,
  ONE_PM_ACTIVITY,
  THREE_PM_ACTIVITY,
];
const REGULAR_SORTED_ACTIVITIES = [
  ONE_PM_ACTIVITY,
  TWO_PM_ACTIVITY,
  THREE_PM_ACTIVITY,
];
const WITH_DUPLICATES_UNSORTED_ACTIVITIES = [
  TWO_PM_ACTIVITY,
  ONE_PM_ACTIVITY,
  THREE_PM_ACTIVITY,
  TWO_PM_ACTIVITY_SECOND,
];
const WITH_DUPLICATES_SORTED_ACTIVITIES = [
  ONE_PM_ACTIVITY,
  TWO_PM_ACTIVITY,
  TWO_PM_ACTIVITY_SECOND,
  THREE_PM_ACTIVITY,
];

describe("sortActivitiesByTime", () => {
  it("Regular unsorted array of activities", () => {
    const sortedActivities = sortActivitiesByTime(REGULAR_UNSORTED_ACTIVITIES);

    expect(sortedActivities).toStrictEqual(REGULAR_SORTED_ACTIVITIES);
  });

  it("Regular sorted array of activities", () => {
    const sortedActivities = sortActivitiesByTime(REGULAR_SORTED_ACTIVITIES);

    expect(sortedActivities).toStrictEqual(REGULAR_SORTED_ACTIVITIES);
  });

  it("Unsorted array of activities with duplicates", () => {
    const sortedActivities = sortActivitiesByTime(
      WITH_DUPLICATES_UNSORTED_ACTIVITIES
    );

    expect(sortedActivities).toStrictEqual(WITH_DUPLICATES_SORTED_ACTIVITIES);
  });

  it("Sorted array of activities with duplicates", () => {
    const sortedActivities = sortActivitiesByTime(
      WITH_DUPLICATES_SORTED_ACTIVITIES
    );

    expect(sortedActivities).toStrictEqual(WITH_DUPLICATES_SORTED_ACTIVITIES);
  });

  it("Empty array", () => {
    const sortedActivities = sortActivitiesByTime([]);

    expect(sortedActivities).toStrictEqual([]);
  });
});
