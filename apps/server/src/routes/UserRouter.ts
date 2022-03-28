import { UserModel } from "@routine-support/domains";
import { Router } from "express";
import { authorization } from "../middleware/authorization";
import { getAuthCookie } from "../utils/getAuthCookie";
import { hashPassword } from "../utils/hashPassword";

export const userRouter = Router();

userRouter.post("/", async (req, res) => {
  const { password, ...data } = req.body;

  UserModel.create(
    { ...data, password: hashPassword(password) },
    (err, result) => {
      if (err) {
        console.log(err);

        return;
      }

      const cookie = getAuthCookie(result);

      return res.status(200).cookie(cookie.name, cookie.token).send(result);
    }
  );
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  UserModel.findOne(
    { email, password: hashPassword(password) },
    (err, result) => {
      if (err || !result) {
        return res.status(401).send(err);
      }

      const cookie = getAuthCookie(result);

      return res.status(200).cookie(cookie.name, cookie.token).send(result);
    }
  );
});

userRouter.get("/", authorization, (__, res) => {
  return res.status(200).send(res.locals.user);
});

userRouter.get("/logout", (__, res) => {
  return res.clearCookie("access_token").sendStatus(200);
});
