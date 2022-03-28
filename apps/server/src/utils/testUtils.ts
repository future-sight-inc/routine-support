import {
  Activity,
  ActivityFilterQuery,
  ActivitySchema,
  RepeatTypeEnum,
} from "@routine-support/domains";
import { DateString, Id } from "@routine-support/types";
import { parseDate, stringifyDate } from "@routine-support/utils";
import { Moment } from "moment";

export const createMockActivityByDateString = (date: DateString): Activity => {
  const parsedDate = parseDate(date);

  return {
    date: parsedDate,
    coachId: "",
    pictogram: "",
    start: parsedDate,
    end: parsedDate,
    name: "",
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
    repeatType: RepeatTypeEnum.None,
    confirmation: {},
    students: [],
  };
};

export const createMockFilter = ({
  students = [],
  isCommon = false,
}: {
  students?: Id[];
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
  activity: ActivitySchema,
  studentId: Id
): ActivitySchema => {
  const updatedStudents = activity.students;

  updatedStudents.push(studentId);

  return { ...activity, students: updatedStudents };
};

export const createMockWeekFromDateStringArray = (
  dates: DateString[]
): Moment[] => {
  return dates.map(parseDate);
};

export const getDateStringFromActivity = (activity?: Activity): string => {
  return activity ? stringifyDate(activity.date) : "";
};
