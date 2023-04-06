import { LanguageEnum } from "@routine-support/types";

export type Token = string;

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
  _id: string;
  name: string;
  coachId: string;
  color: ColorEnum;
  pinCode: string;
  clockType: ClockTypeEnum;
  language: LanguageEnum;
};

export type CreateStudentDto = {
  name: string;
  coachId: string;
  pinCode: string;
  color: ColorEnum;
  clockType: ClockTypeEnum;
  language: LanguageEnum;
};

export type LoginStudentDto = {
  id: string;
};

export enum ClockTypeEnum {
  Analog,
  Digital,
}
