import { setActivityNotified } from "@routine-support/domains";
import {
  addStudentToActivity,
  createMockActivitySchema,
  createMockStudent,
} from "@routine-support/test-utils";
import { shouldNotifyActivity } from "./shouldNotifyActivity";

describe("shouldNotifyActivity", () => {
  it("Common activity, one pending, not notified", () => {
    const activity = createMockActivitySchema();
    const student = createMockStudent();

    expect(shouldNotifyActivity(activity, [student])).toBeTruthy();
  });

  it("Individual activity, one pending, not notified", () => {
    const activity = createMockActivitySchema();
    const student = createMockStudent();

    addStudentToActivity(activity, student);

    expect(shouldNotifyActivity(activity, [student])).toBeTruthy();
  });

  it("Common activity, one pending, notified", () => {
    const activity = createMockActivitySchema();
    const student = createMockStudent();

    setActivityNotified(activity, true);

    expect(shouldNotifyActivity(activity, [student])).toBeFalsy();
  });

  it("Individual activity, one pending, notified", () => {
    const activity = createMockActivitySchema();
    const student = createMockStudent();

    addStudentToActivity(activity, student);
    setActivityNotified(activity, true);

    expect(shouldNotifyActivity(activity, [student])).toBeFalsy();
  });
});
