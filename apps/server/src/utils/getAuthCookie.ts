import { User } from "@routine-support/models";
import * as jwt from "jsonwebtoken";

export const getAuthCookie = (user: User) => {
  return {
    name: "access_token",
    token: jwt.sign(JSON.stringify(user), process.env.SECRET_KEY),
  };
};