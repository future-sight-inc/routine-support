import * as jwt from "jsonwebtoken";
import { User } from "../types/User";

export const getAuthCookie = (user: User): { name: string; token: string } => {
  return {
    name: "access_token",
    token: jwt.sign(JSON.stringify(user), process.env.SECRET_KEY || ""),
  };
};
