import { RepeatTypeEnum } from "@routine-support/domains";
import {
  addStudentToActivity,
  createMockActivity,
  createMockStudent,
  setActivityRepeatType,
} from "@routine-support/test-utils";
import { getActivityImportanceValue } from "./getActivityImportanceValue";

describe("getActivityImportanceValue", () => {
  it("Important individual activity", () => {
    const activity = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(activity, student);
    activity.isImportant = true;

    expect(getActivityImportanceValue(activity)).toStrictEqual(64);
  });

  it("No-repeat individual activity", () => {
    const activity = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(activity, student);
    setActivityRepeatType(activity, RepeatTypeEnum.None);

    expect(getActivityImportanceValue(activity)).toStrictEqual(62);
  });

  it("Yearly individual activity", () => {
    const activity = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(activity, student);
    setActivityRepeatType(activity, RepeatTypeEnum.EveryYear);

    expect(getActivityImportanceValue(activity)).toStrictEqual(30);
  });

  it("Monthly individual activity", () => {
    const activity = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(activity, student);
    setActivityRepeatType(activity, RepeatTypeEnum.EveryMonth);

    expect(getActivityImportanceValue(activity)).toStrictEqual(14);
  });

  it("Weekly individual activity", () => {
    const activity = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(activity, student);
    setActivityRepeatType(activity, RepeatTypeEnum.EveryWeek);

    expect(getActivityImportanceValue(activity)).toStrictEqual(6);
  });

  it("Daily individual activity", () => {
    const activity = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(activity, student);
    setActivityRepeatType(activity, RepeatTypeEnum.EveryDay);

    expect(getActivityImportanceValue(activity)).toStrictEqual(2);
  });

  it("Important common activity", () => {
    const activity = createMockActivity();

    activity.isImportant = true;

    expect(getActivityImportanceValue(activity)).toStrictEqual(64);
  });

  it("No-repeat common activity", () => {
    const activity = createMockActivity();

    setActivityRepeatType(activity, RepeatTypeEnum.None);

    expect(getActivityImportanceValue(activity)).toStrictEqual(31);
  });

  it("Yearly common activity", () => {
    const activity = createMockActivity();

    setActivityRepeatType(activity, RepeatTypeEnum.EveryYear);

    expect(getActivityImportanceValue(activity)).toStrictEqual(15);
  });

  it("Monthly common activity", () => {
    const activity = createMockActivity();

    setActivityRepeatType(activity, RepeatTypeEnum.EveryMonth);

    expect(getActivityImportanceValue(activity)).toStrictEqual(7);
  });

  it("Weekly common activity", () => {
    const activity = createMockActivity();

    setActivityRepeatType(activity, RepeatTypeEnum.EveryWeek);

    expect(getActivityImportanceValue(activity)).toStrictEqual(3);
  });

  it("Daily common activity", () => {
    const activity = createMockActivity();

    setActivityRepeatType(activity, RepeatTypeEnum.EveryDay);

    expect(getActivityImportanceValue(activity)).toStrictEqual(1);
  });
});
