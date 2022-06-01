import { RepeatTypeEnum } from "@routine-support/domains";
import {
  addStudentToActivity,
  createMockActivity,
  createMockStudent,
  setActivityRepeatType,
} from "@routine-support/domains";
import { getActivityImportanceValue } from "./getActivityImportanceValue";

describe("getActivityImportanceValue", () => {
  it("Important individual activity", () => {
    const activity = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(activity, student);
    activity.isImportant = true;

    expect(getActivityImportanceValue(activity)).toStrictEqual(50);
  });

  it("No-repeat individual activity", () => {
    const activity = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(activity, student);
    setActivityRepeatType(activity, RepeatTypeEnum.None);

    expect(getActivityImportanceValue(activity)).toStrictEqual(42);
  });

  it("Yearly individual activity", () => {
    const activity = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(activity, student);
    setActivityRepeatType(activity, RepeatTypeEnum.EveryYear);

    expect(getActivityImportanceValue(activity)).toStrictEqual(32);
  });

  it("Monthly individual activity", () => {
    const activity = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(activity, student);
    setActivityRepeatType(activity, RepeatTypeEnum.EveryMonth);

    expect(getActivityImportanceValue(activity)).toStrictEqual(22);
  });

  it("Weekly individual activity", () => {
    const activity = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(activity, student);
    setActivityRepeatType(activity, RepeatTypeEnum.EveryWeek);

    expect(getActivityImportanceValue(activity)).toStrictEqual(12);
  });

  it("Daily individual activity", () => {
    const activity = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(activity, student);
    setActivityRepeatType(activity, RepeatTypeEnum.EveryDay);

    expect(getActivityImportanceValue(activity)).toStrictEqual(2);
  });
  it("Important group activity", () => {
    const activity = createMockActivity();
    const student = createMockStudent();
    const student2 = createMockStudent();

    addStudentToActivity(activity, student);
    addStudentToActivity(activity, student2);
    activity.isImportant = true;

    expect(getActivityImportanceValue(activity)).toStrictEqual(50);
  });

  it("No-repeat group activity", () => {
    const activity = createMockActivity();
    const student = createMockStudent();
    const student2 = createMockStudent();

    addStudentToActivity(activity, student);
    addStudentToActivity(activity, student2);
    setActivityRepeatType(activity, RepeatTypeEnum.None);

    expect(getActivityImportanceValue(activity)).toStrictEqual(41);
  });

  it("Yearly group activity", () => {
    const activity = createMockActivity();
    const student = createMockStudent();
    const student2 = createMockStudent();

    addStudentToActivity(activity, student);
    addStudentToActivity(activity, student2);
    setActivityRepeatType(activity, RepeatTypeEnum.EveryYear);

    expect(getActivityImportanceValue(activity)).toStrictEqual(31);
  });

  it("Monthly group activity", () => {
    const activity = createMockActivity();
    const student = createMockStudent();
    const student2 = createMockStudent();

    addStudentToActivity(activity, student);
    addStudentToActivity(activity, student2);
    setActivityRepeatType(activity, RepeatTypeEnum.EveryMonth);

    expect(getActivityImportanceValue(activity)).toStrictEqual(21);
  });

  it("Weekly group activity", () => {
    const activity = createMockActivity();
    const student = createMockStudent();
    const student2 = createMockStudent();

    addStudentToActivity(activity, student);
    addStudentToActivity(activity, student2);
    setActivityRepeatType(activity, RepeatTypeEnum.EveryWeek);

    expect(getActivityImportanceValue(activity)).toStrictEqual(11);
  });

  it("Daily group activity", () => {
    const activity = createMockActivity();
    const student = createMockStudent();
    const student2 = createMockStudent();

    addStudentToActivity(activity, student);
    addStudentToActivity(activity, student2);
    setActivityRepeatType(activity, RepeatTypeEnum.EveryDay);

    expect(getActivityImportanceValue(activity)).toStrictEqual(1);
  });

  it("Important common activity", () => {
    const activity = createMockActivity();

    activity.isImportant = true;

    expect(getActivityImportanceValue(activity)).toStrictEqual(50);
  });

  it("No-repeat common activity", () => {
    const activity = createMockActivity();

    setActivityRepeatType(activity, RepeatTypeEnum.None);

    expect(getActivityImportanceValue(activity)).toStrictEqual(40);
  });

  it("Yearly common activity", () => {
    const activity = createMockActivity();

    setActivityRepeatType(activity, RepeatTypeEnum.EveryYear);

    expect(getActivityImportanceValue(activity)).toStrictEqual(30);
  });

  it("Monthly common activity", () => {
    const activity = createMockActivity();

    setActivityRepeatType(activity, RepeatTypeEnum.EveryMonth);

    expect(getActivityImportanceValue(activity)).toStrictEqual(20);
  });

  it("Weekly common activity", () => {
    const activity = createMockActivity();

    setActivityRepeatType(activity, RepeatTypeEnum.EveryWeek);

    expect(getActivityImportanceValue(activity)).toStrictEqual(10);
  });

  it("Daily common activity", () => {
    const activity = createMockActivity();

    setActivityRepeatType(activity, RepeatTypeEnum.EveryDay);

    expect(getActivityImportanceValue(activity)).toStrictEqual(0);
  });
});
