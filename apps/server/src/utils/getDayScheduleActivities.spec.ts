import {
  addStudentToActivity,
  createMockActivityFromTimePeriod,
  createMockStudent,
} from "@routine-support/domains";
import { getDayScheduleActivities } from "./getDayScheduleActivities";

describe("getDayScheduleActivities", () => {
  it("1 common activity", () => {
    const activity = createMockActivityFromTimePeriod({
      start: "11:00",
      end: "12:00",
    });

    const scheduleActivities = [activity];

    expect(getDayScheduleActivities([activity])).toStrictEqual(
      scheduleActivities
    );
  });

  it("1 individual activity", () => {
    const activity = createMockActivityFromTimePeriod({
      start: "11:00",
      end: "12:00",
    });
    const student = createMockStudent();

    addStudentToActivity(activity, student);

    const activities = [activity];
    const scheduleActivities = [activity];

    expect(getDayScheduleActivities(activities)).toStrictEqual(
      scheduleActivities
    );
  });

  it("1 individual activity and 1 common activity", () => {
    const commonActivity = createMockActivityFromTimePeriod({
      start: "11:00",
      end: "12:00",
    });

    const student = createMockStudent();
    const individualActivity = createMockActivityFromTimePeriod({
      start: "12:00",
      end: "13:00",
    });

    addStudentToActivity(individualActivity, student);

    const activities = [commonActivity, individualActivity];
    const scheduleActivities = [commonActivity, individualActivity];

    expect(getDayScheduleActivities(activities)).toStrictEqual(
      scheduleActivities
    );
  });

  it("1 individual activity and 1 common activity - crossing", () => {
    const commonActivity = createMockActivityFromTimePeriod({
      start: "11:00",
      end: "12:00",
    });

    const student = createMockStudent();
    const individualActivity = createMockActivityFromTimePeriod({
      start: "11:30",
      end: "13:00",
    });

    addStudentToActivity(individualActivity, student);

    const activities = [commonActivity, individualActivity];
    const scheduleActivities = [individualActivity];

    expect(getDayScheduleActivities(activities)).toStrictEqual(
      scheduleActivities
    );
  });
});
