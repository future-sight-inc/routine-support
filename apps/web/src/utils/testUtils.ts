import { Activity, RepeatTypeEnum } from "@routine-support/domains";
import { parseTime } from "@routine-support/utils";
import moment from "moment";

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
