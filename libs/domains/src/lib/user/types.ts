import { Email } from "@routine-support/types";

export type UserName = string;

export type User = {
  _id: string;
  name: UserName;
  email: Email;
};

export type LoginUserDto = {
  email: Email;
  password: string;
};

export type RegisterUserDto = {
  name: string;
  email: Email;
  password: string;
};

export type UpdateUserDto = Partial<RegisterUserDto>;
