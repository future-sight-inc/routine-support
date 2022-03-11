import { createMockActivityFromTimePeriod } from "../testUtils";
import { groupActivities } from "./groupActivities";

describe("groupActivities", () => {
  it("Three no crossing activities", () => {
    const activity1 = createMockActivityFromTimePeriod({
      start: "11:00",
      end: "12:00",
    });
    const activity2 = createMockActivityFromTimePeriod({
      start: "13:00",
      end: "14:00",
    });
    const activity3 = createMockActivityFromTimePeriod({
      start: "15:00",
      end: "16:00",
    });
    const activities = [activity1, activity2, activity3];
    const groups = groupActivities(activities);

    expect(groups.length).toBe(activities.length);
  });

  it("Three equal activities", () => {
    const activity1 = createMockActivityFromTimePeriod({
      start: "11:00",
      end: "12:00",
    });
    const activity2 = createMockActivityFromTimePeriod({
      start: "11:00",
      end: "12:00",
    });
    const activity3 = createMockActivityFromTimePeriod({
      start: "11:00",
      end: "12:00",
    });
    const activities = [activity1, activity2, activity3];
    const groups = groupActivities(activities);

    expect(groups.length).toBe(1);
  });

  it("Two crossing, one not crossing activities", () => {
    const activity1 = createMockActivityFromTimePeriod({
      start: "11:00",
      end: "12:00",
    });
    const activity2 = createMockActivityFromTimePeriod({
      start: "11:30",
      end: "12:00",
    });
    const activity3 = createMockActivityFromTimePeriod({
      start: "13:00",
      end: "14:00",
    });
    const activities = [activity1, activity2, activity3];
    const groups = groupActivities(activities);

    expect(groups.length).toBe(2);
  });

  it("First crosses second, second crosses third", () => {
    const activity1 = createMockActivityFromTimePeriod({
      start: "11:00",
      end: "12:00",
    });
    const activity2 = createMockActivityFromTimePeriod({
      start: "11:30",
      end: "13:00",
    });
    const activity3 = createMockActivityFromTimePeriod({
      start: "12:30",
      end: "14:00",
    });
    const activities = [activity1, activity2, activity3];
    const groups = groupActivities(activities);

    expect(groups.length).toBe(1);
  });

  it("Activities start one after another. Should be different groups (design requirement)", () => {
    const activity1 = createMockActivityFromTimePeriod({
      start: "11:00",
      end: "12:00",
    });
    const activity2 = createMockActivityFromTimePeriod({
      start: "12:00",
      end: "13:00",
    });
    const activity3 = createMockActivityFromTimePeriod({
      start: "13:00",
      end: "14:00",
    });
    const activities = [activity1, activity2, activity3];
    const groups = groupActivities(activities);

    expect(groups.length).toBe(3);
  });
});
