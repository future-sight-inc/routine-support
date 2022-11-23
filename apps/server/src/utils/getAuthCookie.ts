import * as jwt from "jsonwebtoken";
import { User } from "../types/User";

export const getAuthCookie = (authName: string, user: User): { name: string; token: string } => {
  return {
    name: `${authName}_access_token`,
    token: jwt.sign(JSON.stringify(user), process.env.SECRET_KEY || ""),
  };
};
