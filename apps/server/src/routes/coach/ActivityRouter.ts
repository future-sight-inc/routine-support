import { ActivityJson, parseActivityJson, WeekSocketEventTypeEnum } from "@routine-support/domains";
import { Request, Router } from "express";

import { SubmitErrorData } from "@routine-support/types";
import { ActivityController, EmitController } from "../../controllers";

export const activityRouter = Router();

activityRouter.post("/", async (req: Request<undefined, SubmitErrorData, ActivityJson>, res) => {
  const coachId = res.locals.coach._id;
  const activity = parseActivityJson(req.body);
  const validationData = await ActivityController.create(activity, coachId);

  if (!validationData.isValid) {
    return res.status(422).send(validationData);
  }

  await EmitController.emitToAllCoachStudents(coachId, WeekSocketEventTypeEnum.UpdateSchedule);

  return res.sendStatus(200);
});

activityRouter.put(
  "/:id",
  async (req: Request<{ id: string }, SubmitErrorData, ActivityJson>, res) => {
    const activityId = req.params.id;
    const coachId = res.locals.coach._id;
    const activity = parseActivityJson(req.body);
    const validationData = await ActivityController.update(activityId, activity);

    if (validationData && !validationData.isValid) {
      return res.status(422).send(validationData);
    }

    await EmitController.emitToAllCoachStudents(coachId, WeekSocketEventTypeEnum.UpdateSchedule);

    return res.sendStatus(200);
  }
);

activityRouter.delete("/:id", async (req, res) => {
  const activityId = req.params.id;
  const coachId = res.locals.coach._id;

  await ActivityController.delete(activityId);
  await EmitController.emitToAllCoachStudents(coachId, WeekSocketEventTypeEnum.UpdateSchedule);

  return res.sendStatus(200);
});
