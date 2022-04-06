import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { Model } from "mongoose";
import { User } from "../types/User";

export const createAuthorizationMiddleware =
  <T>(authName: string, model: Model<T>) =>
    (req: Request, res: Response, next: () => unknown) => {
      const token = req.cookies.access_token;

      if (!token) {
        return res.sendStatus(403);
      }

      try {
        const data = jwt.verify(token, process.env.SECRET_KEY || "") as User;

        return model.findById(data._id, (err, result) => {
          if (err || !result) {
            res.clearCookie("access_token");

            return res.status(401).send(err);
          }

          // todo В отдельную функцию
          res.locals[authName] = result;
          res.locals[authName]._id = data._id;

          return next();
        });
      } catch {
        return res.sendStatus(403);
      }
    };
