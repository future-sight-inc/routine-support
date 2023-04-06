import {
  createMockActivity,
  createMockStudent,
} from "@routine-support/domains";
import { stringifyDate } from "@routine-support/utils";
import { confirmStudentActivity } from "./confirmStudentActivity";
import { setActivityNotified } from "./setActivityNotified";

describe("setActivityNotified", () => {
  it("No confirmed students", () => {
    const activity = createMockActivity();

    setActivityNotified(activity, true);

    expect(activity.confirmation).toStrictEqual({
      [stringifyDate(activity.date)]: {
        students: [],
        isNotified: true,
      },
    });
  });

  it("One confirmed student", () => {
    const activity = createMockActivity();
    const student = createMockStudent();

    confirmStudentActivity({
      student,
      activity,
      confirmationDate: activity.date,
    });

    setActivityNotified(activity, true);

    expect(activity.confirmation).toStrictEqual({
      [stringifyDate(activity.date)]: {
        students: [student._id],
        isNotified: true,
      },
    });
  });
});
