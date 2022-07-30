import {
  createActivitiesGroupFromTimePeriod,
  createMockActivityFromTimePeriod,
} from "@routine-support/domains";
import { addActivityToGroup } from "../addActivityToGroup";
import { mergeGroups } from "./mergeGroups";

describe("mergeGroups", () => {
  it("Passed one group", () => {
    const activity = createMockActivityFromTimePeriod({
      start: "12:00",
      end: "16:00",
    });
    const group = createActivitiesGroupFromTimePeriod({
      start: "13:00",
      end: "15:00",
    });

    addActivityToGroup(group, activity);
    const groups = [group];

    expect(mergeGroups(groups)).toEqual(group);
  });

  it("Passed two groups", () => {
    const activity1 = createMockActivityFromTimePeriod({
      start: "12:00",
      end: "16:00",
    });
    const group1 = createActivitiesGroupFromTimePeriod({
      start: "13:00",
      end: "15:00",
    });

    addActivityToGroup(group1, activity1);

    const activity2 = createMockActivityFromTimePeriod({
      start: "12:00",
      end: "16:00",
    });
    const group2 = createActivitiesGroupFromTimePeriod({
      start: "13:00",
      end: "15:00",
    });

    addActivityToGroup(group2, activity2);

    const groups = [group1, group2];

    expect(mergeGroups(groups).activities).toEqual([activity1, activity2]);
  });
});
