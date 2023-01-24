import {
  addActivityToGroup,
  createMockActivitiesGroup,
  createMockActivityFromTimePeriod,
} from "@routine-support/domains";

import { getActivityTopOffset } from "./getActivityTopOffset";

const ROW_HEIGHT = 120;

describe("getActivityTopOffset", () => {
  it("Activity and group have the same start", () => {
    const group = createMockActivitiesGroup();
    const activity = createMockActivityFromTimePeriod({ start: "11:00", end: "12:00" });

    addActivityToGroup(group, activity);

    expect(getActivityTopOffset({ activity, group, rowHeight: ROW_HEIGHT })).toBe(0);
  });

  it("Group starts in 11:00, activity starts in 11:30", () => {
    const group = createMockActivitiesGroup();
    const activity1 = createMockActivityFromTimePeriod({ start: "11:00", end: "12:00" });
    const activity2 = createMockActivityFromTimePeriod({ start: "11:30", end: "12:00" });

    addActivityToGroup(group, activity1);
    addActivityToGroup(group, activity2);

    expect(getActivityTopOffset({ activity: activity2, group, rowHeight: ROW_HEIGHT })).toBe(
      ROW_HEIGHT / 2
    );
  });
});
