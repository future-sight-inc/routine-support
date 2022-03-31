import moment from "moment";
import { Moment } from "moment";
import {
  Activity,
  ActivityFilterQuery,
  ActivitySchema,
  RepeatTypeEnum,
  Student,
} from "../../../domains/src";
import { DateString, LanguageEnum } from "../../../types/src";
import { parseDate, parseTime, stringifyDate } from "../../../utils/src";
import * as uuid from "uuid";

export const createMockActivityByDateString = (date: DateString): Activity => {
  const parsedDate = parseDate(date);

  return {
    date: parsedDate,
    coachId: "",
    pictogram: "",
    start: parsedDate,
    end: parsedDate,
    name: "",
    isCommon: true,
    repeatType: RepeatTypeEnum.None,
    confirmation: {},
    students: [],
  };
};

export const createMockActivitySchema = (): ActivitySchema => {
  return {
    date: "",
    coachId: "",
    pictogram: "",
    start: "",
    end: "",
    name: "",
    isCommon: true,
    repeatType: RepeatTypeEnum.None,
    confirmation: {},
    students: [],
  };
};

export const createMockFilter = ({
  students = [],
  isCommon = false,
}: {
  students?: string[];
  isCommon?: boolean;
}): ActivityFilterQuery => {
  let activityFilterQuery: ActivityFilterQuery = [];

  activityFilterQuery = activityFilterQuery.concat(students);

  if (isCommon) {
    activityFilterQuery.push("common");
  }

  return activityFilterQuery;
};

export const addStudentToActivity = (
  activity: ActivitySchema | Activity,
  student: Student
): void => {
  const updatedStudents = activity.students;

  updatedStudents.push(student._id);
  activity.isCommon = false;
};

export const createMockWeekFromDateStringArray = (
  dates: DateString[]
): Moment[] => {
  return dates.map(parseDate);
};

export const getDateStringFromActivity = (activity?: Activity): string => {
  return activity ? stringifyDate(activity.date) : "";
};

const MOCK_DATE = parseDate("19.06.1999");

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
