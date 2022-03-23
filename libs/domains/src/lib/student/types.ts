import { Id, LanguageEnum } from "@routine-support/types";

export type Token = string;
export type CoachId = Id;

export type Student = {
  _id: Id;
  name: string;
  coachId: CoachId;
  color: string;
  pinCode: string;
  clockType: ClockTypeEnum;
  language: LanguageEnum;
};

export type NewStudentDto = {
  name: string;
  coachId: CoachId;
  pinCode: string;
  clockType: ClockTypeEnum;
  language: LanguageEnum;
};

export type StudentDto = Student;

export type StudentLoginDto = {
  id: Id;
};

export enum ClockTypeEnum {
  Analog,
  Digital,
}
