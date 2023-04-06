import { setActivityNotified } from "@routine-support/domains";
import {
  addStudentToActivity,
  createMockActivity,
  createMockStudent,
} from "@routine-support/domains";
import { shouldNotifyActivity } from "./shouldNotifyActivity";

describe("shouldNotifyActivity", () => {
  it("Common activity, one pending, not notified", () => {
    const activity = createMockActivity();
    const student = createMockStudent();

    expect(shouldNotifyActivity(activity, [student])).toBeTruthy();
  });

  it("Individual activity, one pending, not notified", () => {
    const activity = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(activity, student);

    expect(shouldNotifyActivity(activity, [student])).toBeTruthy();
  });

  it("Common activity, one pending, notified", () => {
    const activity = createMockActivity();
    const student = createMockStudent();

    setActivityNotified(activity, true);

    expect(shouldNotifyActivity(activity, [student])).toBeFalsy();
  });

  it("Individual activity, one pending, notified", () => {
    const activity = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(activity, student);
    setActivityNotified(activity, true);

    expect(shouldNotifyActivity(activity, [student])).toBeFalsy();
  });
});
