import { User, UserModel } from "@routine-support/models";
import * as jwt from "jsonwebtoken";

export const authorization = (req, res, next) => {
  const token = req.cookies.access_token;

  console.log(req.cookies)

  if (!token) {
    return res.sendStatus(403);
  }

  try {
    const data = jwt.verify(token, process.env.SECRET_KEY) as User;

    UserModel.findOne({ email: data.email }, (err, result) => {
      if (err || !result) {
        return res.status(401).send(err);
      }

      res.locals.user = result;
      return next();
    });
  } catch {
    return res.sendStatus(403);
  }
};
