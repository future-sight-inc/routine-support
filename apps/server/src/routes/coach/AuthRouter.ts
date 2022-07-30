import {
  ActivityModel,
  CoachModel,
  NotificationModel,
  StudentModel,
} from "@routine-support/domains";
import { Router } from "express";
import { COACH_LOCALS_NAME, coachAuthorization } from "../../middleware/coachAuthorization";
import { getAuthCookie } from "../../utils/getAuthCookie";
import { hashPassword } from "../../utils/hashPassword";
import { validateCoach } from "../../utils/validateCoach";

export const authRouter = Router();

authRouter.post("/", async (req, res) => {
  const validationData = await validateCoach(req.body);

  if (validationData && !validationData.isValid) {
    return res.status(422).send(validationData);
  }

  return CoachModel.create(
    { ...req.body, password: hashPassword(req.body.password) },
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

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  CoachModel.findOne({ email, password: hashPassword(password) }, (err, result) => {
    if (err || !result) {
      return res.status(401).send({ error: "Invalid credentials" });
    }

    const cookie = getAuthCookie(result);

    return res.status(200).cookie(cookie.name, cookie.token).send(result);
  });
});

authRouter.get("/", coachAuthorization, (__, res) => {
  return res.status(200).send(res.locals[COACH_LOCALS_NAME]);
});

authRouter.delete("/", coachAuthorization, async (__, res) => {
  const coach = res.locals[COACH_LOCALS_NAME];

  await CoachModel.findByIdAndDelete(coach._id);
  await StudentModel.deleteMany({ coachId: coach._id });
  await ActivityModel.deleteMany({ coachId: coach._id });
  await NotificationModel.deleteMany({ coachId: coach._id });

  return res.status(200).clearCookie("access_token").send(res.locals[COACH_LOCALS_NAME]);
});

authRouter.get("/logout", (__, res) => {
  return res.clearCookie("access_token").sendStatus(200);
});
