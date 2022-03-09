import { User, UserModel } from "@routine-support/domains";
import * as jwt from "jsonwebtoken";

export const authorization = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return res.sendStatus(403);
  }

  try {
    const data = jwt.verify(token, process.env.NX_SECRET_KEY) as User;

    UserModel.findOne({ email: data.email }, (err, result) => {
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
