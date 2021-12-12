import { Moment } from "moment";
import { Id, ImageUrl, TimeString, DateString } from "@routine-support/types";

export type ActivityName = string;

export enum RepeatTypeEnum {
  None,
  EveryDay,
  EveryWeek,
  EveryMonth,
}

export type Activity = {
  _id?: Id;
  coachId: Id;
  name: ActivityName;
  pictogram: ImageUrl;
  date: Moment;
  start: Moment;
  end: Moment;
  repeat: RepeatTypeEnum;
  students?: Id[];
};

export type ActivityDto = {
  _id?: Id;
  coachId: Id;
  name: ActivityName;
  pictogram: ImageUrl;
  date: DateString;
  start: TimeString;
  end: TimeString;
  repeat: RepeatTypeEnum;
  students?: Id[];
};
