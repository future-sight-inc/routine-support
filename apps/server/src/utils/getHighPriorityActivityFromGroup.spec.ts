import {
  addStudentToActivity,
  createMockActivitiesGroup,
  createMockActivity,
  createMockStudent,
} from "@routine-support/test-utils";
import { addActivityToGroup } from "libs/utils/src/lib/groupActivities/addActivityToGroup";
import { getHighPriorityActivityFromGroup } from "./getHighPriorityActivityFromGroup";

describe("getHighPriorityActivityFromGroup", () => {
  it("Group has 1 common activity", () => {
    const group = createMockActivitiesGroup();
    const commonActivity = createMockActivity();

    addActivityToGroup(group, commonActivity);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      commonActivity
    );
  });

  it("Group has 1 individual activity", () => {
    const group = createMockActivitiesGroup();
    const activity = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(activity, student);
    addActivityToGroup(group, activity);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(activity);
  });

  it("Group has one 1 common and 1 individual activity", () => {
    const group = createMockActivitiesGroup();
    const commonActivity = createMockActivity();
    const individualActivity = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(individualActivity, student);
    addActivityToGroup(group, commonActivity);
    addActivityToGroup(group, individualActivity);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      individualActivity
    );
  });

  it("Group has 2 common and 2 individual activity", () => {
    const group = createMockActivitiesGroup();
    const commonActivity1 = createMockActivity();
    const individualActivity1 = createMockActivity();
    const commonActivity2 = createMockActivity();
    const individualActivity2 = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(individualActivity1, student);
    addStudentToActivity(individualActivity2, student);
    addActivityToGroup(group, commonActivity1);
    addActivityToGroup(group, individualActivity1);
    addActivityToGroup(group, commonActivity2);
    addActivityToGroup(group, individualActivity2);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      individualActivity1
    );
  });

  it("Group has 1 common and 2 individual activity", () => {
    const group = createMockActivitiesGroup();
    const commonActivity = createMockActivity();
    const individualActivity1 = createMockActivity();
    const individualActivity2 = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(individualActivity1, student);
    addStudentToActivity(individualActivity2, student);
    addActivityToGroup(group, commonActivity);
    addActivityToGroup(group, individualActivity1);
    addActivityToGroup(group, individualActivity2);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      individualActivity1
    );
  });

  it("Group has 2 common and 1 individual activity", () => {
    const group = createMockActivitiesGroup();
    const commonActivity1 = createMockActivity();
    const individualActivity1 = createMockActivity();
    const commonActivity2 = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(individualActivity1, student);
    addActivityToGroup(group, commonActivity1);
    addActivityToGroup(group, individualActivity1);
    addActivityToGroup(group, commonActivity2);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      individualActivity1
    );
  });
});
