import { User, UserModel } from "@routine-support/domains";
import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";

export const authorization = (
  req: Request,
  res: Response,
  next: () => unknown
) => {
  const token = req.cookies.access_token;

  if (!token) {
    return res.sendStatus(403);
  }

  try {
    const data = jwt.verify(token, process.env.SECRET_KEY || "") as User;

    return UserModel.findOne({ email: data.email }, (err, result) => {
      if (err || !result) {
        res.clearCookie("access_token");

        return res.status(401).send(err);
      }

      res.locals.user = result;

      return next();
    });
  } catch {
    return res.sendStatus(403);
  }
};
