import * as jwt from "jsonwebtoken";
import { User } from "../types/User";
import { Cookie } from "../types/Cookie";
import { ACCESS_TOKEN } from "../constants/AccessToken";

export const createAuthCookie = (authName: string, user: User): Cookie => {
  return {
    name: ACCESS_TOKEN,
    token: jwt.sign(JSON.stringify(user), process.env.SECRET_KEY || ""),
  };
};
