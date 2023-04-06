import {
  addStudentToActivity,
  createMockActivity,
  createMockStudent,
} from "@routine-support/domains";
import { confirmStudentActivity } from "./confirmStudentActivity";
import { getActivityStatusesFromStudents } from "./getActivityStatusesFromStudents";

describe("getActivityStatusesFromStudents", () => {
  it("Common activity, one student pending", () => {
    const activity = createMockActivity();
    const student = createMockStudent();

    const { assignedStudents, pendingStudents, confirmedStudents } =
      getActivityStatusesFromStudents(activity, [student]);

    expect(assignedStudents).toStrictEqual([student]);
    expect(pendingStudents).toStrictEqual([student]);
    expect(confirmedStudents).toStrictEqual([]);
  });

  it("Common activity, two students pending", () => {
    const activity = createMockActivity();
    const student1 = createMockStudent();
    const student2 = createMockStudent();

    const { assignedStudents, pendingStudents, confirmedStudents } =
      getActivityStatusesFromStudents(activity, [student1, student2]);

    expect(assignedStudents).toStrictEqual([student1, student2]);
    expect(pendingStudents).toStrictEqual([student1, student2]);
    expect(confirmedStudents).toStrictEqual([]);
  });

  it("Common activity, one student pending, one student confirmed", () => {
    const activity = createMockActivity();
    const student1 = createMockStudent();
    const student2 = createMockStudent();

    confirmStudentActivity({
      student: student1,
      activity,
      confirmationDate: activity.date,
    });

    const { assignedStudents, pendingStudents, confirmedStudents } =
      getActivityStatusesFromStudents(activity, [student1, student2]);

    expect(assignedStudents).toStrictEqual([student1, student2]);
    expect(pendingStudents).toStrictEqual([student2]);
    expect(confirmedStudents).toStrictEqual([student1]);
  });

  it("Common activity, one student confirmed", () => {
    const activity = createMockActivity();
    const student = createMockStudent();

    confirmStudentActivity({
      student,
      activity,
      confirmationDate: activity.date,
    });

    const { assignedStudents, pendingStudents, confirmedStudents } =
      getActivityStatusesFromStudents(activity, [student]);

    expect(assignedStudents).toStrictEqual([student]);
    expect(pendingStudents).toStrictEqual([]);
    expect(confirmedStudents).toStrictEqual([student]);
  });

  it("Common activity, two students confirmed", () => {
    const activity = createMockActivity();
    const student1 = createMockStudent();
    const student2 = createMockStudent();

    confirmStudentActivity({
      student: student1,
      activity,
      confirmationDate: activity.date,
    });
    confirmStudentActivity({
      student: student2,
      activity,
      confirmationDate: activity.date,
    });

    const { assignedStudents, pendingStudents, confirmedStudents } =
      getActivityStatusesFromStudents(activity, [student1, student2]);

    expect(assignedStudents).toStrictEqual([student1, student2]);
    expect(pendingStudents).toStrictEqual([]);
    expect(confirmedStudents).toStrictEqual([student1, student2]);
  });

  it("Individual activity, one student pending", () => {
    const activity = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(activity, student);

    const { assignedStudents, pendingStudents, confirmedStudents } =
      getActivityStatusesFromStudents(activity, [student]);

    expect(assignedStudents).toStrictEqual([student]);
    expect(pendingStudents).toStrictEqual([student]);
    expect(confirmedStudents).toStrictEqual([]);
  });

  it("Individual activity, two students pending", () => {
    const activity = createMockActivity();
    const student1 = createMockStudent();
    const student2 = createMockStudent();

    addStudentToActivity(activity, student1);
    addStudentToActivity(activity, student2);

    const { assignedStudents, pendingStudents, confirmedStudents } =
      getActivityStatusesFromStudents(activity, [student1, student2]);

    expect(assignedStudents).toStrictEqual([student1, student2]);
    expect(pendingStudents).toStrictEqual([student1, student2]);
    expect(confirmedStudents).toStrictEqual([]);
  });

  it("Individual activity, one student pending, one student confirmed", () => {
    const activity = createMockActivity();
    const student1 = createMockStudent();
    const student2 = createMockStudent();

    addStudentToActivity(activity, student1);
    addStudentToActivity(activity, student2);

    confirmStudentActivity({
      student: student1,
      activity,
      confirmationDate: activity.date,
    });

    const { assignedStudents, pendingStudents, confirmedStudents } =
      getActivityStatusesFromStudents(activity, [student1, student2]);

    expect(assignedStudents).toStrictEqual([student1, student2]);
    expect(pendingStudents).toStrictEqual([student2]);
    expect(confirmedStudents).toStrictEqual([student1]);
  });

  it("Individual activity, one student confirmed", () => {
    const activity = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(activity, student);

    confirmStudentActivity({
      student,
      activity,
      confirmationDate: activity.date,
    });

    const { assignedStudents, pendingStudents, confirmedStudents } =
      getActivityStatusesFromStudents(activity, [student]);

    expect(assignedStudents).toStrictEqual([student]);
    expect(pendingStudents).toStrictEqual([]);
    expect(confirmedStudents).toStrictEqual([student]);
  });

  it("Individual activity, two students confirmed", () => {
    const activity = createMockActivity();
    const student1 = createMockStudent();
    const student2 = createMockStudent();

    addStudentToActivity(activity, student1);
    addStudentToActivity(activity, student2);

    confirmStudentActivity({
      student: student1,
      activity,
      confirmationDate: activity.date,
    });
    confirmStudentActivity({
      student: student2,
      activity,
      confirmationDate: activity.date,
    });

    const { assignedStudents, pendingStudents, confirmedStudents } =
      getActivityStatusesFromStudents(activity, [student1, student2]);

    expect(assignedStudents).toStrictEqual([student1, student2]);
    expect(pendingStudents).toStrictEqual([]);
    expect(confirmedStudents).toStrictEqual([student1, student2]);
  });
});
