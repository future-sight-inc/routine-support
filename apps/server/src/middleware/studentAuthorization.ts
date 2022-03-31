import { StudentModel, User } from "@routine-support/domains";
import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";

export const studentAuthorization = (
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

    return StudentModel.findById(data._id, (err, result) => {
      if (err || !result) {
        res.clearCookie("access_token");

        return res.status(401).send(err);
      }

      // todo Вынести в функцию
      res.locals.student = { ...result, _id: String(result._id) };

      return next();
    });
  } catch {
    return res.sendStatus(403);
  }
};
