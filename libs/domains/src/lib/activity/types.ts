import { Moment } from "moment";
import { DateString, Id, ImageUrl, TimeString } from "@routine-support/types";

export type ActivityName = string;

export enum RepeatTypeEnum {
  None,
  EveryDay,
  EveryWeek,
  EveryMonth,
}

// * Приходится хранить отдельный тип для схемы из-за того
// * что дата/время в БД хранится в строковом виде
export type ActivitySchema = {
  _id: Id;
  coachId: Id;
  name: ActivityName;
  pictogram: ImageUrl;
  date: DateString;
  start: TimeString;
  end: TimeString;
  repeat: RepeatTypeEnum;
  students?: Id[];
  confirmation?: ConfirmationInfo;
};

export type ConfirmationInfo = {
  [key: string]: Id[];
};

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
  confirmation?: ConfirmationInfo;
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
  confirmation?: ConfirmationInfo;
};
