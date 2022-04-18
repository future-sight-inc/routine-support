import { Id, LanguageEnum } from "@routine-support/types";

export type Token = string;
export type CoachId = Id;

export enum ColorEnum {
  Yellow,
  Purple,
  Pink,
  Red,
  Mint,
  Orange,
  Brown,
  DarkGreen,
}

export type Student = {
  _id: Id;
  name: string;
  coachId: CoachId;
  color: ColorEnum;
  pinCode: string;
  clockType: ClockTypeEnum;
  language: LanguageEnum;
};

export type CreateStudentDto = {
  name: string;
  coachId: CoachId;
  pinCode: string;
  color: ColorEnum;
  clockType: ClockTypeEnum;
  language: LanguageEnum;
};

export type LoginStudentDto = {
  id: Id;
};

export enum ClockTypeEnum {
  Analog,
  Digital,
}
