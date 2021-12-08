import { Email } from "@routine-support/types";

export type UserName = string;

export type UserDto = {
  _id: string;
  name: UserName;
  email: Email;
};

export type User = UserDto;

export type UserLoginDto = {
  email: Email;
  password: string;
};

export type UserRegisterDto = {
  name: string;
  email: Email;
  password: string;
};

export type UserUpdateDto = Partial<UserRegisterDto>;
