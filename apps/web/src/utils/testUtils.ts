import { Activity, RepeatTypeEnum, Student } from "@routine-support/domains";
import { parseTime } from "@routine-support/utils";
import moment, { Moment } from "moment";
import * as uuid from "uuid";

// todo move testUtils into module
export const createMockActivity = (): Activity => {
  const mockDate = moment();

  return {
    _id: "",
    coachId: "",
    name: "",
    pictogram: "",
    date: mockDate,
    start: mockDate,
    end: mockDate,
    repeatType: RepeatTypeEnum.None,
    students: [],
    confirmation: {},
  };
};

export const createMockActivityFromTimePeriod = ({
  start,
  end,
}: {
  start: string;
  end: string;
}) => {
  const mockDate = moment();

  return {
    _id: "",
    coachId: "",
    name: "",
    pictogram: "",
    date: mockDate,
    start: parseTime(start, mockDate),
    end: parseTime(end, mockDate),
    repeatType: RepeatTypeEnum.None,
    students: [],
    confirmation: {},
  };
};

export const createGroupFromTimePeriod = ({
  start,
  end,
}: {
  start: string;
  end: string;
}) => {
  const mockDate = moment();

  return {
    start: parseTime(start, mockDate),
    end: parseTime(end, mockDate),
    activities: [],
  };
};

export const createMockStudent = (): Student => {
  const studentId = uuid.v4();

  return {
    _id: studentId,
    name: "",
    coachId: "",
    color: "#bebebe",
  };
};

export const addStudentToActivity = (
  activity: Activity,
  student: Student
): Activity => {
  activity.students.push(student._id);

  return activity;
};

export const getMondayFromWeekInfo = ({
  weekNumber,
  year,
}: {
  weekNumber: number;
  year: number;
}): Moment => {
  const monday = moment().year(year).week(weekNumber + 1).day("Monday");

  return monday;
};
