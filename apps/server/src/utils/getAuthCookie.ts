import * as jwt from "jsonwebtoken";
import { User } from "../types/User";
import { Cookie } from "../types/Cookie";

export const getAuthCookie = (authName: string, user: User): Cookie => {
  return {
    name: `${authName}_access_token`,
    token: jwt.sign(JSON.stringify(user), process.env.SECRET_KEY || ""),
  };
};
