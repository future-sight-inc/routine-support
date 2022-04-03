import { Email } from "@routine-support/types";

export type CoachName = string;

export type Coach = {
  _id: string;
  name: CoachName;
  email: Email;
};

export type LoginCoachDto = {
  email: Email;
  password: string;
};

export type RegisterCoachDto = {
  name: string;
  email: Email;
  password: string;
};

export type UpdateCoachDto = Partial<RegisterCoachDto>;
