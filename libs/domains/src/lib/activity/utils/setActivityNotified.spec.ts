import {
  createMockActivitySchema,
  createMockStudent,
} from "@routine-support/test-utils";
import { confirmStudentActivity } from "./confirmStudentActivity";
import { setActivityNotified } from "./setActivityNotified";

describe("setActivityNotified", () => {
  it("No confirmed students", () => {
    const activity = createMockActivitySchema();

    setActivityNotified(activity, true);

    expect(activity.confirmation).toStrictEqual({
      [activity.date]: {
        students: [],
        isNotified: true,
      },
    });
  });

  it("One confirmed student", () => {
    const activity = createMockActivitySchema();
    const student = createMockStudent();

    confirmStudentActivity({
      student,
      activity,
      confirmationDate: activity.date,
    });

    setActivityNotified(activity, true);

    expect(activity.confirmation).toStrictEqual({
      [activity.date]: {
        students: [student._id],
        isNotified: true,
      },
    });
  });
});
