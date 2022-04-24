import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { Model } from "mongoose";
import { User } from "../types/User";

export const createAuthorizationMiddleware =
  <T>(authName: string, model: Model<T>) =>
    (req: Request, res: Response, next: () => unknown) => {
      try {
        const token = req.cookies.access_token;
        const data = jwt.verify(token, process.env.SECRET_KEY || "") as User;

        return model.findById(data._id, (err, result) => {
          if (err || !result) {
            res.clearCookie("access_token");

            return res.status(401).send({
              error: "Invalid credentials",
            });
          }

          res.locals[authName] = result;
          res.locals[authName]._id = data._id;

          return next();
        });
      } catch (error) {
        return res.status(401).send({
          error: "Invalid credentials",
        });
      }
    };
