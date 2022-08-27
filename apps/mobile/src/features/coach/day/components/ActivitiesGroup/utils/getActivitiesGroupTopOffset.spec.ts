import {
  addActivityToGroup,
  createMockActivitiesGroup,
  createMockActivityFromTimePeriod,
} from "@routine-support/domains";
import { TIMELINE_MARGIN } from "apps/mobile/src/constants/TimelineMargin";

import { getActivitiesGroupTopOffset } from "./getActivitiesGroupTopOffset";

const ROW_HEIGHT = 120;

describe("getActivitiesGroupTopOffset", () => {
  it("Group of first row, starts in 0:00", () => {
    const group = createMockActivitiesGroup();
    const activity = createMockActivityFromTimePeriod({ start: "0:00", end: "1:00" });
    const ROW_INDEX = 0;

    addActivityToGroup(group, activity);

    expect(getActivitiesGroupTopOffset({ group, rowHeight: ROW_HEIGHT, rowIndex: ROW_INDEX })).toBe(
      TIMELINE_MARGIN
    );
  });

  it("Group of first row, starts in 0:30", () => {
    const group = createMockActivitiesGroup();
    const activity = createMockActivityFromTimePeriod({ start: "0:30", end: "1:00" });
    const ROW_INDEX = 0;

    addActivityToGroup(group, activity);

    expect(getActivitiesGroupTopOffset({ group, rowHeight: ROW_HEIGHT, rowIndex: ROW_INDEX })).toBe(
      ROW_HEIGHT / 2
    );
  });

  it("Group of third row, starts in 3:00", () => {
    const group = createMockActivitiesGroup();
    const activity = createMockActivityFromTimePeriod({ start: "3:00", end: "4:00" });
    const ROW_INDEX = 3;

    addActivityToGroup(group, activity);

    expect(getActivitiesGroupTopOffset({ group, rowHeight: ROW_HEIGHT, rowIndex: 3 })).toBe(
      ROW_HEIGHT * 3 + TIMELINE_MARGIN + ROW_INDEX
    );
  });

  it("Group of third row, starts in 3:30", () => {
    const group = createMockActivitiesGroup();
    const activity = createMockActivityFromTimePeriod({ start: "3:30", end: "4:00" });
    const ROW_INDEX = 3;

    addActivityToGroup(group, activity);

    expect(getActivitiesGroupTopOffset({ group, rowHeight: ROW_HEIGHT, rowIndex: 3 })).toBe(
      ROW_HEIGHT * 3 + ROW_HEIGHT / 2 + ROW_INDEX
    );
  });
});
