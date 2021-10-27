import { Email } from "types/main";

export type UserDto = {
  _id: string;
  email: Email;
  name: string;
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
