import { CoachModel } from "@routine-support/domains";
import { Router } from "express";
import {
  COACH_LOCALS_NAME,
  coachAuthorization,
} from "../middleware/coachAuthorization";
import { getAuthCookie } from "../utils/getAuthCookie";
import { hashPassword } from "../utils/hashPassword";

export const coachRouter = Router();

coachRouter.post("/", async (req, res) => {
  const { password, ...data } = req.body;

  CoachModel.create(
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

coachRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  CoachModel.findOne(
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

coachRouter.get("/", coachAuthorization, (__, res) => {
  return res.status(200).send(res.locals[COACH_LOCALS_NAME]);
});

coachRouter.get("/logout", (__, res) => {
  return res.clearCookie("access_token").sendStatus(200);
});
