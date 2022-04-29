import { Router } from "express";
import {
  ActivityModel,
  WeekSocketEventTypeEnum,
} from "@routine-support/domains";
import { studentAuthorization } from "../middleware/studentAuthorization";
import { stringifyDate } from "@routine-support/utils";
import { validateActivity } from "../utils/validateActivity";
import moment from "moment";
import { coachAuthorization } from "../middleware/coachAuthorization";
import { emitByCoachId } from "../main";

export const activityRouter = Router();

activityRouter.get("/:id", coachAuthorization, async (req, res) => {
  const activity = await ActivityModel.findById(req.params.id);

  if (activity) {
    res.status(200).send(activity);
  }

  return res.sendStatus(404);
});

activityRouter.post("/", coachAuthorization, async (req, res) => {
  const validationData = await validateActivity(req.body);

  if (validationData && !validationData.isValid) {
    return res.status(422).send(validationData);
  }

  await ActivityModel.create({
    ...req.body,
  });

  return res.sendStatus(200);
});

activityRouter.put("/:id", coachAuthorization, async (req, res) => {
  const id = req.params.id;

  const validationData = await validateActivity(req.body);

  if (validationData && !validationData.isValid) {
    return res.status(422).send(validationData);
  }

  await ActivityModel.findByIdAndUpdate(id, {
    ...req.body,
    confirmation: {},
  });

  return res.sendStatus(200);
});

activityRouter.delete("/:id", coachAuthorization, async (req, res) => {
  const id = req.params.id;

  ActivityModel.findByIdAndDelete(id, (err) => {
    if (err) return console.log(err);

    return res.sendStatus(200);
  });
});

activityRouter.put(
  "/confirm/:id/:timestamp",
  studentAuthorization,
  async (req, res) => {
    const { id, timestamp } = req.params;
    const { _id: studentId, coachId } = res.locals.student;
    const dateString = stringifyDate(moment.unix(Number(timestamp)));

    const updatedActivity = await ActivityModel.findById(id);

    // todo resolve type
    if (!updatedActivity!.confirmation[dateString]) {
      updatedActivity!.confirmation[dateString] = [];
    }

    updatedActivity!.confirmation[dateString].push(studentId);

    ActivityModel.findByIdAndUpdate(id, { ...updatedActivity }, (err) => {
      if (err) {
        console.log(err);

        return;
      }

      emitByCoachId(coachId, { type: WeekSocketEventTypeEnum.UpdateCalendar });

      return res.sendStatus(200);
    });
  }
);
