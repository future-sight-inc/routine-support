import { Id } from "@routine-support/types";

export type Token = string;
export type CoachId = Id;

export type Student = {
  _id: Id;
  name: string;
  coachId: CoachId;
  color: string;
};

export type NewStudentDto = {
  name: string;
  coachId: CoachId;
};

export type StudentDto = Student;

export type StudentLoginDto = {
  token: Token;
};
