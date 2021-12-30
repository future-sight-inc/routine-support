import { StudentModel, User } from "@routine-support/domains";
import * as jwt from "jsonwebtoken";

export const studentAuthorization = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return res.sendStatus(403);
  }

  try {
    const data = jwt.verify(token, process.env.SECRET_KEY) as User;

    StudentModel.findById(data._id, (err, result) => {
      if (err || !result) {
        return res.status(401).send(err);
      }

      res.locals.student = result;
      return next();
    });
  } catch {
    return res.sendStatus(403);
  }
};
