import {
  createMockActivity,
  createMockStudent,
} from "@routine-support/domains";
import { stringifyDate } from "@routine-support/utils";
import { confirmStudentActivity } from "./confirmStudentActivity";

describe("confirmStudentActivity", () => {
  it("First confirmed student", () => {
    const activity = createMockActivity();
    const student = createMockStudent();

    confirmStudentActivity({
      student,
      activity,
      confirmationDate: stringifyDate(activity.date),
    });

    expect(activity.confirmation).toStrictEqual({
      [stringifyDate(activity.date)]: {
        students: [student._id],
        isNotified: false,
      },
    });
  });

  it("Second confirmed student", () => {
    const activity = createMockActivity();
    const student1 = createMockStudent();
    const student2 = createMockStudent();

    confirmStudentActivity({
      student: student1,
      activity,
      confirmationDate: stringifyDate(activity.date),
    });

    confirmStudentActivity({
      student: student2,
      activity,
      confirmationDate: stringifyDate(activity.date),
    });

    expect(activity.confirmation).toStrictEqual({
      [stringifyDate(activity.date)]: {
        students: [student1._id, student2._id],
        isNotified: false,
      },
    });
  });

  it("Attempt to confirm activity twice", () => {
    const activity = createMockActivity();
    const student1 = createMockStudent();

    confirmStudentActivity({
      student: student1,
      activity,
      confirmationDate: stringifyDate(activity.date),
    });

    confirmStudentActivity({
      student: student1,
      activity,
      confirmationDate: stringifyDate(activity.date),
    });

    expect(activity.confirmation).toStrictEqual({
      [stringifyDate(activity.date)]: {
        students: [student1._id],
        isNotified: false,
      },
    });
  });

  it("Confirm repeat activity two different days", () => {
    const activity = createMockActivity();
    const student = createMockStudent();
    const dateOneDayAfter = activity.date.clone().add(1, "day");

    confirmStudentActivity({
      student,
      activity,
      confirmationDate: stringifyDate(activity.date),
    });

    confirmStudentActivity({
      student,
      activity,
      confirmationDate: stringifyDate(dateOneDayAfter),
    });

    expect(activity.confirmation).toStrictEqual({
      [stringifyDate(activity.date)]: {
        students: [student._id],
        isNotified: false,
      },
      [stringifyDate(dateOneDayAfter)]: {
        students: [student._id],
        isNotified: false,
      },
    });
  });
});
