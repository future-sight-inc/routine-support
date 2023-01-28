import { DateString, Id, ImageUrl } from "@routine-support/types";

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
  date: Date;
  start: Date;
  end: Date;
  repeatType: RepeatTypeEnum;
  isCommon: boolean;
  isImportant: boolean;
  students: Id[];
  confirmation: ConfirmationInfo;
};

export type ConfirmationInfo = {
  [key in DateString]: {
    students: Id[];
    isNotified: boolean;
  };
};

export interface ActivitiesGroup {
  start: Date;
  end: Date;
  activities: Activity[];
}
