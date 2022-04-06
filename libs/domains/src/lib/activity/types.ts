import { Moment } from "moment";
import { DateString, Id, ImageUrl, TimeString } from "@routine-support/types";

export type ActivityName = string;

export enum RepeatTypeEnum {
  None,
  EveryDay,
  EveryWeek,
  EveryMonth,
  EveryYear,
}

export type Activity = {
  _id: Id;
  coachId: Id;
  name: ActivityName;
  pictogram: ImageUrl;
  date: Moment;
  start: Moment;
  end: Moment;
  repeatType: RepeatTypeEnum;
  isCommon: boolean;
  isImportant: boolean;
  students: Id[];
  confirmation: ConfirmationInfo;
};

export type ActivitySchema = {
  _id: Id;
  coachId: Id;
  name: ActivityName;
  pictogram: ImageUrl;
  date: DateString;
  start: TimeString;
  end: TimeString;
  repeatType: RepeatTypeEnum;
  isCommon: boolean;
  isImportant: boolean;
  students: Id[];
  confirmation: ConfirmationInfo;
};

export type ConfirmationInfo = {
  [key in DateString]: Id[];
};

export interface ActivitiesGroup {
  start: Moment;
  end: Moment;
  activities: Activity[];
}
