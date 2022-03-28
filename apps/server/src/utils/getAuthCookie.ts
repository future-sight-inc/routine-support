import { User } from "@routine-support/domains";
import * as jwt from "jsonwebtoken";

export const getAuthCookie = (user: User): { name: string; token: string } => {
  return {
    name: "access_token",
    token: jwt.sign(JSON.stringify(user), process.env.SECRET_KEY || ""),
  };
};
