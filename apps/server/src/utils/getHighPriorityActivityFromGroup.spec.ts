import { addActivityToGroup, RepeatTypeEnum } from "@routine-support/domains";
import {
  addStudentToActivity,
  createMockActivitiesGroup,
  createMockActivity,
  createMockStudent,
  setActivityRepeatType
} from "@routine-support/test-utils";
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
  it("Group has common and individual activities, repeat yearly", () => {
    const group = createMockActivitiesGroup();
    const commonActivity = createMockActivity();
    const individualActivity = createMockActivity();
    const student = createMockStudent();

    setActivityRepeatType(commonActivity, RepeatTypeEnum.EveryYear)
    setActivityRepeatType(individualActivity, RepeatTypeEnum.EveryYear)

    addStudentToActivity(individualActivity, student);
    addActivityToGroup(group, commonActivity);
    addActivityToGroup(group, individualActivity);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      individualActivity
    );
  });

  it("Group has common and individual activities, repeat monthly", () => {
    const group = createMockActivitiesGroup();
    const commonActivity = createMockActivity();
    const individualActivity = createMockActivity();
    const student = createMockStudent();

    setActivityRepeatType(commonActivity, RepeatTypeEnum.EveryMonth)
    setActivityRepeatType(individualActivity, RepeatTypeEnum.EveryMonth)

    addStudentToActivity(individualActivity, student);
    addActivityToGroup(group, commonActivity);
    addActivityToGroup(group, individualActivity);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      individualActivity
    );
  });

  it("Group has common and individual activities, repeat weekly", () => {
    const group = createMockActivitiesGroup();
    const commonActivity = createMockActivity();
    const individualActivity = createMockActivity();
    const student = createMockStudent();

    setActivityRepeatType(commonActivity, RepeatTypeEnum.EveryWeek)
    setActivityRepeatType(individualActivity, RepeatTypeEnum.EveryWeek)

    addStudentToActivity(individualActivity, student);
    addActivityToGroup(group, commonActivity);
    addActivityToGroup(group, individualActivity);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      individualActivity
    );
  });

  it("Group has common and individual activities, repeat daily", () => {
    const group = createMockActivitiesGroup();
    const commonActivity = createMockActivity();
    const individualActivity = createMockActivity();
    const student = createMockStudent();

    setActivityRepeatType(commonActivity, RepeatTypeEnum.EveryDay)
    setActivityRepeatType(individualActivity, RepeatTypeEnum.EveryDay)

    addStudentToActivity(individualActivity, student);
    addActivityToGroup(group, commonActivity);
    addActivityToGroup(group, individualActivity);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      individualActivity
    );
  });

  it("Group has common and individual activities, no repeat", () => {
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

  it("Group has 2 individual activities, repeat yearly", () => {
    const group = createMockActivitiesGroup();
    const individualActivityA = createMockActivity();
    const individualActivityB = createMockActivity();
    const student = createMockStudent();

    setActivityRepeatType(individualActivityA, RepeatTypeEnum.EveryYear)
    setActivityRepeatType(individualActivityB, RepeatTypeEnum.EveryYear)

    addStudentToActivity(individualActivityA, student);
    addStudentToActivity(individualActivityB, student);

    addActivityToGroup(group, individualActivityA);
    addActivityToGroup(group, individualActivityB);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      individualActivityA
    );
  });

  it("Group has 2 individual activities, repeat monthly", () => {
    const group = createMockActivitiesGroup();
    const individualActivityA = createMockActivity();
    const individualActivityB = createMockActivity();
    const student = createMockStudent();

    setActivityRepeatType(individualActivityA, RepeatTypeEnum.EveryMonth)
    setActivityRepeatType(individualActivityB, RepeatTypeEnum.EveryMonth)

    addStudentToActivity(individualActivityA, student);
    addStudentToActivity(individualActivityB, student);

    addActivityToGroup(group, individualActivityA);
    addActivityToGroup(group, individualActivityB);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      individualActivityA
    );
  });

  it("Group has 2 individual activities, repeat weekly", () => {
    const group = createMockActivitiesGroup();
    const individualActivityA = createMockActivity();
    const individualActivityB = createMockActivity();
    const student = createMockStudent();

    setActivityRepeatType(individualActivityA, RepeatTypeEnum.EveryWeek)
    setActivityRepeatType(individualActivityB, RepeatTypeEnum.EveryWeek)

    addStudentToActivity(individualActivityA, student);
    addStudentToActivity(individualActivityB, student);

    addActivityToGroup(group, individualActivityA);
    addActivityToGroup(group, individualActivityB);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      individualActivityA
    );
  });

  it("Group has 2 individual activities, repeat daily", () => {
    const group = createMockActivitiesGroup();
    const individualActivityA = createMockActivity();
    const individualActivityB = createMockActivity();
    const student = createMockStudent();

    setActivityRepeatType(individualActivityA, RepeatTypeEnum.EveryDay)
    setActivityRepeatType(individualActivityB, RepeatTypeEnum.EveryDay)

    addStudentToActivity(individualActivityA, student);
    addStudentToActivity(individualActivityB, student);

    addActivityToGroup(group, individualActivityA);
    addActivityToGroup(group, individualActivityB);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      individualActivityA
    );
  });

  it("Group has 2 individual activities, no repeat", () => {
    const group = createMockActivitiesGroup();
    const individualActivityA = createMockActivity();
    const individualActivityB = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(individualActivityA, student);
    addStudentToActivity(individualActivityB, student);

    addActivityToGroup(group, individualActivityA);
    addActivityToGroup(group, individualActivityB);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      individualActivityA
    );
  });

  it("Group has 2 individual activities, repeat yearly", () => {
    const group = createMockActivitiesGroup();
    const commonActivityA = createMockActivity();
    const commonActivityB = createMockActivity();

    setActivityRepeatType(commonActivityA, RepeatTypeEnum.EveryYear)
    setActivityRepeatType(commonActivityB, RepeatTypeEnum.EveryYear)

    addActivityToGroup(group, commonActivityA);
    addActivityToGroup(group, commonActivityB);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      commonActivityA
    );
  });

  it("Group has 2 individual activities, repeat monthly", () => {
    const group = createMockActivitiesGroup();
    const commonActivityA = createMockActivity();
    const commonActivityB = createMockActivity();

    setActivityRepeatType(commonActivityA, RepeatTypeEnum.EveryMonth)
    setActivityRepeatType(commonActivityB, RepeatTypeEnum.EveryMonth)

    addActivityToGroup(group, commonActivityA);
    addActivityToGroup(group, commonActivityB);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      commonActivityA
    );
  });

  it("Group has 2 individual activities, repeat weekly", () => {
    const group = createMockActivitiesGroup();
    const commonActivityA = createMockActivity();
    const commonActivityB = createMockActivity();

    setActivityRepeatType(commonActivityA, RepeatTypeEnum.EveryWeek)
    setActivityRepeatType(commonActivityB, RepeatTypeEnum.EveryWeek)

    addActivityToGroup(group, commonActivityA);
    addActivityToGroup(group, commonActivityB);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      commonActivityA
    );
  });

  it("Group has 2 individual activities, repeat daily", () => {
    const group = createMockActivitiesGroup();
    const commonActivityA = createMockActivity();
    const commonActivityB = createMockActivity();

    setActivityRepeatType(commonActivityA, RepeatTypeEnum.EveryDay)
    setActivityRepeatType(commonActivityB, RepeatTypeEnum.EveryDay)

    addActivityToGroup(group, commonActivityA);
    addActivityToGroup(group, commonActivityB);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      commonActivityA
    );
  });

  it("Group has 2 individual activities, no repeat", () => {
    const group = createMockActivitiesGroup();
    const commonActivityA = createMockActivity();
    const commonActivityB = createMockActivity();

    addActivityToGroup(group, commonActivityA);
    addActivityToGroup(group, commonActivityB);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      commonActivityA
    );
  });

  it("Group has only individual activities, has important activity", () => {
    const group = createMockActivitiesGroup();
    const individualActivityImportant = createMockActivity();
    const individualActivityNoRepeat = createMockActivity();
    const individualActivityYearly = createMockActivity();
    const individualActivityMonthly = createMockActivity();
    const individualActivityWeekly = createMockActivity();
    const individualActivityDaily = createMockActivity();
    const student = createMockStudent();

    individualActivityImportant.isImportant = true;

    setActivityRepeatType(individualActivityNoRepeat, RepeatTypeEnum.None);
    setActivityRepeatType(individualActivityYearly, RepeatTypeEnum.EveryYear);
    setActivityRepeatType(individualActivityMonthly, RepeatTypeEnum.EveryMonth);
    setActivityRepeatType(individualActivityWeekly, RepeatTypeEnum.EveryWeek);
    setActivityRepeatType(individualActivityDaily, RepeatTypeEnum.EveryDay);

    addStudentToActivity(individualActivityImportant, student);
    addStudentToActivity(individualActivityNoRepeat, student);
    addStudentToActivity(individualActivityYearly, student);
    addStudentToActivity(individualActivityMonthly, student);
    addStudentToActivity(individualActivityWeekly, student);
    addStudentToActivity(individualActivityDaily, student);

    addActivityToGroup(group, individualActivityImportant);
    addActivityToGroup(group, individualActivityNoRepeat);
    addActivityToGroup(group, individualActivityYearly);
    addActivityToGroup(group, individualActivityMonthly);
    addActivityToGroup(group, individualActivityWeekly);
    addActivityToGroup(group, individualActivityDaily);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      individualActivityImportant
    );
  });

  it("Group has only individual activities, repeat: none + year + month + week + day", () => {
    const group = createMockActivitiesGroup();
    const individualActivityNoRepeat = createMockActivity();
    const individualActivityYearly = createMockActivity();
    const individualActivityMonthly = createMockActivity();
    const individualActivityWeekly = createMockActivity();
    const individualActivityDaily = createMockActivity();
    const student = createMockStudent();

    setActivityRepeatType(individualActivityNoRepeat, RepeatTypeEnum.None);
    setActivityRepeatType(individualActivityYearly, RepeatTypeEnum.EveryYear);
    setActivityRepeatType(individualActivityMonthly, RepeatTypeEnum.EveryMonth);
    setActivityRepeatType(individualActivityWeekly, RepeatTypeEnum.EveryWeek);
    setActivityRepeatType(individualActivityDaily, RepeatTypeEnum.EveryDay);

    addStudentToActivity(individualActivityNoRepeat, student);
    addStudentToActivity(individualActivityYearly, student);
    addStudentToActivity(individualActivityMonthly, student);
    addStudentToActivity(individualActivityWeekly, student);
    addStudentToActivity(individualActivityDaily, student);

    addActivityToGroup(group, individualActivityNoRepeat);
    addActivityToGroup(group, individualActivityYearly);
    addActivityToGroup(group, individualActivityMonthly);
    addActivityToGroup(group, individualActivityWeekly);
    addActivityToGroup(group, individualActivityDaily);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      individualActivityNoRepeat
    );
  });

  it("Group has only individual activities, repeat: year + month + week + day", () => {
    const group = createMockActivitiesGroup();
    const individualActivityYearly = createMockActivity();
    const individualActivityMonthly = createMockActivity();
    const individualActivityWeekly = createMockActivity();
    const individualActivityDaily = createMockActivity();
    const student = createMockStudent();

    setActivityRepeatType(individualActivityYearly, RepeatTypeEnum.EveryYear);
    setActivityRepeatType(individualActivityMonthly, RepeatTypeEnum.EveryMonth);
    setActivityRepeatType(individualActivityWeekly, RepeatTypeEnum.EveryWeek);
    setActivityRepeatType(individualActivityDaily, RepeatTypeEnum.EveryDay);

    addStudentToActivity(individualActivityYearly, student);
    addStudentToActivity(individualActivityMonthly, student);
    addStudentToActivity(individualActivityWeekly, student);
    addStudentToActivity(individualActivityDaily, student);

    addActivityToGroup(group, individualActivityYearly);
    addActivityToGroup(group, individualActivityMonthly);
    addActivityToGroup(group, individualActivityWeekly);
    addActivityToGroup(group, individualActivityDaily);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      individualActivityYearly
    );
  });

  it("Group has only individual activities, repeat: month + week + day", () => {
    const group = createMockActivitiesGroup();
    const individualActivityMonthly = createMockActivity();
    const individualActivityWeekly = createMockActivity();
    const individualActivityDaily = createMockActivity();
    const student = createMockStudent();

    setActivityRepeatType(individualActivityMonthly, RepeatTypeEnum.EveryMonth);
    setActivityRepeatType(individualActivityWeekly, RepeatTypeEnum.EveryWeek);
    setActivityRepeatType(individualActivityDaily, RepeatTypeEnum.EveryDay);

    addStudentToActivity(individualActivityMonthly, student);
    addStudentToActivity(individualActivityWeekly, student);
    addStudentToActivity(individualActivityDaily, student);

    addActivityToGroup(group, individualActivityMonthly);
    addActivityToGroup(group, individualActivityWeekly);
    addActivityToGroup(group, individualActivityDaily);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      individualActivityMonthly
    );
  });

  it("Group has only individual activities, repeat: week + day", () => {
    const group = createMockActivitiesGroup();
    const individualActivityWeekly = createMockActivity();
    const individualActivityDaily = createMockActivity();
    const student = createMockStudent();

    setActivityRepeatType(individualActivityWeekly, RepeatTypeEnum.EveryWeek);
    setActivityRepeatType(individualActivityDaily, RepeatTypeEnum.EveryDay);

    addStudentToActivity(individualActivityWeekly, student);
    addStudentToActivity(individualActivityDaily, student);

    addActivityToGroup(group, individualActivityWeekly);
    addActivityToGroup(group, individualActivityDaily);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      individualActivityWeekly
    );
  });

  it("Group has only common activities, has important", () => {
    const group = createMockActivitiesGroup();
    const commonActivityImportant = createMockActivity();
    const commonActivityNoRepeat = createMockActivity();
    const commonActivityYearly = createMockActivity();
    const commonActivityMonthly = createMockActivity();
    const commonActivityWeekly = createMockActivity();
    const commonActivityDaily = createMockActivity();

    commonActivityImportant.isImportant = true;
    setActivityRepeatType(commonActivityNoRepeat, RepeatTypeEnum.None);
    setActivityRepeatType(commonActivityYearly, RepeatTypeEnum.EveryYear);
    setActivityRepeatType(commonActivityMonthly, RepeatTypeEnum.EveryMonth);
    setActivityRepeatType(commonActivityWeekly, RepeatTypeEnum.EveryWeek);
    setActivityRepeatType(commonActivityDaily, RepeatTypeEnum.EveryDay);

    addActivityToGroup(group, commonActivityImportant);
    addActivityToGroup(group, commonActivityNoRepeat);
    addActivityToGroup(group, commonActivityYearly);
    addActivityToGroup(group, commonActivityMonthly);
    addActivityToGroup(group, commonActivityWeekly);
    addActivityToGroup(group, commonActivityDaily);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      commonActivityImportant
    );
  });

  it("Group has only common activities, repeat: none + year + month + week + day", () => {
    const group = createMockActivitiesGroup();
    const commonActivityNoRepeat = createMockActivity();
    const commonActivityYearly = createMockActivity();
    const commonActivityMonthly = createMockActivity();
    const commonActivityWeekly = createMockActivity();
    const commonActivityDaily = createMockActivity();

    setActivityRepeatType(commonActivityNoRepeat, RepeatTypeEnum.None);
    setActivityRepeatType(commonActivityYearly, RepeatTypeEnum.EveryYear);
    setActivityRepeatType(commonActivityMonthly, RepeatTypeEnum.EveryMonth);
    setActivityRepeatType(commonActivityWeekly, RepeatTypeEnum.EveryWeek);
    setActivityRepeatType(commonActivityDaily, RepeatTypeEnum.EveryDay);

    addActivityToGroup(group, commonActivityNoRepeat);
    addActivityToGroup(group, commonActivityYearly);
    addActivityToGroup(group, commonActivityMonthly);
    addActivityToGroup(group, commonActivityWeekly);
    addActivityToGroup(group, commonActivityDaily);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      commonActivityNoRepeat
    );
  });

  it("Group has only common activities, repeat: year + month + week + day", () => {
    const group = createMockActivitiesGroup();
    const commonActivityYearly = createMockActivity();
    const commonActivityMonthly = createMockActivity();
    const commonActivityWeekly = createMockActivity();
    const commonActivityDaily = createMockActivity();

    setActivityRepeatType(commonActivityYearly, RepeatTypeEnum.EveryYear);
    setActivityRepeatType(commonActivityMonthly, RepeatTypeEnum.EveryMonth);
    setActivityRepeatType(commonActivityWeekly, RepeatTypeEnum.EveryWeek);
    setActivityRepeatType(commonActivityDaily, RepeatTypeEnum.EveryDay);

    addActivityToGroup(group, commonActivityYearly);
    addActivityToGroup(group, commonActivityMonthly);
    addActivityToGroup(group, commonActivityWeekly);
    addActivityToGroup(group, commonActivityDaily);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      commonActivityYearly
    );
  });

  it("Group has only common activities, repeat: month + week + day", () => {
    const group = createMockActivitiesGroup();
    const commonActivityMonthly = createMockActivity();
    const commonActivityWeekly = createMockActivity();
    const commonActivityDaily = createMockActivity();

    setActivityRepeatType(commonActivityMonthly, RepeatTypeEnum.EveryMonth);
    setActivityRepeatType(commonActivityWeekly, RepeatTypeEnum.EveryWeek);
    setActivityRepeatType(commonActivityDaily, RepeatTypeEnum.EveryDay);

    addActivityToGroup(group, commonActivityMonthly);
    addActivityToGroup(group, commonActivityWeekly);
    addActivityToGroup(group, commonActivityDaily);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      commonActivityMonthly
    );
  });

  it("Group has only common activities, repeat: week + day", () => {
    const group = createMockActivitiesGroup();
    const commonActivityWeekly = createMockActivity();
    const commonActivityDaily = createMockActivity();

    setActivityRepeatType(commonActivityWeekly, RepeatTypeEnum.EveryWeek);
    setActivityRepeatType(commonActivityDaily, RepeatTypeEnum.EveryDay);

    addActivityToGroup(group, commonActivityWeekly);
    addActivityToGroup(group, commonActivityDaily);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      commonActivityWeekly
    );
  });

  it("Group has common weekly and individual daily activity", () => {
    const group = createMockActivitiesGroup();
    const commonActivityWeekly = createMockActivity();
    const individualActivityDaily = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(individualActivityDaily, student);

    setActivityRepeatType(commonActivityWeekly, RepeatTypeEnum.EveryWeek)
    setActivityRepeatType(individualActivityDaily, RepeatTypeEnum.EveryDay)

    addActivityToGroup(group, commonActivityWeekly);
    addActivityToGroup(group, individualActivityDaily);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      commonActivityWeekly
    );
  });

  it("Group has common daily and individual yearly activity", () => {
    const group = createMockActivitiesGroup();
    const commonActivityDaily = createMockActivity();
    const individualActivityYearly = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(individualActivityYearly, student);

    setActivityRepeatType(commonActivityDaily, RepeatTypeEnum.EveryDay)
    setActivityRepeatType(individualActivityYearly, RepeatTypeEnum.EveryYear)

    addActivityToGroup(group, commonActivityDaily);
    addActivityToGroup(group, individualActivityYearly);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      individualActivityYearly
    );
  });

  it("Group has common daily and individual weekly activity", () => {
    const group = createMockActivitiesGroup();
    const commonActivityDaily = createMockActivity();
    const individualActivityWeekly = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(individualActivityWeekly, student);

    setActivityRepeatType(commonActivityDaily, RepeatTypeEnum.EveryDay)
    setActivityRepeatType(individualActivityWeekly, RepeatTypeEnum.EveryWeek)

    addActivityToGroup(group, commonActivityDaily);
    addActivityToGroup(group, individualActivityWeekly);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      individualActivityWeekly
    );
  });

  it("Group has common yearly and individual daily activity", () => {
    const group = createMockActivitiesGroup();
    const commonActivityYearly = createMockActivity();
    const individualActivityDaily = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(individualActivityDaily, student);

    setActivityRepeatType(commonActivityYearly, RepeatTypeEnum.EveryYear)
    setActivityRepeatType(individualActivityDaily, RepeatTypeEnum.EveryDay)

    addActivityToGroup(group, commonActivityYearly);
    addActivityToGroup(group, individualActivityDaily);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      commonActivityYearly
    );
  });

  it("Group has common no-repeat and individual monthly activity", () => {
    const group = createMockActivitiesGroup();
    const commonActivityNoRepeat = createMockActivity();
    const individualActivityMonthly = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(individualActivityMonthly, student);

    setActivityRepeatType(commonActivityNoRepeat, RepeatTypeEnum.None)
    setActivityRepeatType(individualActivityMonthly, RepeatTypeEnum.EveryMonth)

    addActivityToGroup(group, commonActivityNoRepeat);
    addActivityToGroup(group, individualActivityMonthly);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      commonActivityNoRepeat
    );
  });

  it("Group has common monthly and individual no-repeat activity", () => {
    const group = createMockActivitiesGroup();
    const commonActivityMonthly = createMockActivity();
    const individualActivityNoRepeat = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(individualActivityNoRepeat, student);

    setActivityRepeatType(commonActivityMonthly, RepeatTypeEnum.EveryMonth)
    setActivityRepeatType(individualActivityNoRepeat, RepeatTypeEnum.None)

    addActivityToGroup(group, commonActivityMonthly);
    addActivityToGroup(group, individualActivityNoRepeat);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      individualActivityNoRepeat
    );
  });

  it("Group has common no-repeat and individual important activity", () => {
    const group = createMockActivitiesGroup();
    const commonActivityNoRepeat = createMockActivity();
    const individualActivityImportant = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(individualActivityImportant, student);

    setActivityRepeatType(commonActivityNoRepeat, RepeatTypeEnum.None)
    individualActivityImportant.isImportant = true;

    addActivityToGroup(group, commonActivityNoRepeat);
    addActivityToGroup(group, individualActivityImportant);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      individualActivityImportant
    );
  });

  it("Group has common important and individual no-repeat activity", () => {
    const group = createMockActivitiesGroup();
    const commonActivityImportant = createMockActivity();
    const individualActivityNoRepeat = createMockActivity();
    const student = createMockStudent();

    addStudentToActivity(individualActivityNoRepeat, student);

    commonActivityImportant.isImportant = true;
    setActivityRepeatType(individualActivityNoRepeat, RepeatTypeEnum.None)

    addActivityToGroup(group, commonActivityImportant);
    addActivityToGroup(group, individualActivityNoRepeat);

    expect(getHighPriorityActivityFromGroup(group)).toStrictEqual(
      commonActivityImportant
    );
  });
})
