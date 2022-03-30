import { Activity, RepeatTypeEnum, Student } from "@routine-support/domains";
import { LanguageEnum } from "@routine-support/types";
import { parseDate, parseTime } from "@routine-support/utils";
import moment, { Moment } from "moment";
import * as uuid from "uuid";

const MOCK_DATE = parseDate("19.06.1999");

// todo move testUtils into module
export const createMockActivity = (): Activity => {
  return {
    _id: "",
    coachId: "",
    name: "",
    pictogram: "",
    date: MOCK_DATE,
    start: MOCK_DATE,
    end: MOCK_DATE,
    repeatType: RepeatTypeEnum.None,
    isCommon: true,
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
}): Activity => {
  return {
    _id: "",
    coachId: "",
    name: "",
    pictogram: "",
    date: MOCK_DATE,
    start: parseTime(start),
    end: parseTime(end),
    repeatType: RepeatTypeEnum.None,
    isCommon: true,
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
  return {
    start: parseTime(start),
    end: parseTime(end),
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
    pinCode: "",
    clockType: 0,
    language: LanguageEnum.En,
  };
};

export const addStudentToActivity = (
  activity: Activity,
  student: Student
): void => {
  activity.students.push(student._id);
  activity.isCommon = false;
};

export const getMondayFromWeekInfo = ({
  weekNumber,
  year,
}: {
  weekNumber: number;
  year: number;
}): Moment => {
  const monday = moment()
    .year(year)
    .week(weekNumber + 1)
    .day("Monday");

  return monday;
};
