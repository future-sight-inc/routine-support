import { Router } from "express";
import { ActivityModel } from "@routine-support/domains";
import { studentAuthorization } from "../middleware/studentAuthorization";
import { stringifyDate } from "@routine-support/utils";
import { validateActivity } from "../utils/validateActivity";
import moment from "moment";
import { coachAuthorization } from "../middleware/coachAuthorization";

export const activityRouter = Router();

activityRouter.get("/:id", coachAuthorization, async (req, res) => {
  const activity = await ActivityModel.findById(req.params.id);

  if (activity) {
    res.status(200).send(activity);
  }

  return res.sendStatus(404);
});

activityRouter.post("/", coachAuthorization, async (req, res) => {
  const validationData = validateActivity(req.body);

  if (validationData.isValid) {
    await ActivityModel.create({
      ...req.body,
    });

    return res.sendStatus(200);
  }

  return res.status(422).send(validationData);
});

activityRouter.delete("/:id", coachAuthorization, async (req, res) => {
  const id = req.params.id;

  ActivityModel.findByIdAndDelete(id, (err) => {
    if (err) return console.log(err);

    return res.sendStatus(200);
  });
});

activityRouter.put("/:id", coachAuthorization, async (req, res) => {
  const id = req.params.id;

  const validationData = validateActivity(req.body);

  if (validationData.isValid) {
    await ActivityModel.findByIdAndUpdate(id, {
      ...req.body,
    });

    return res.sendStatus(200);
  }

  return res.status(422).send(validationData);
});

activityRouter.put(
  "/confirm/:id/:timestamp",
  studentAuthorization,
  async (req, res) => {
    const { id, timestamp } = req.params;
    const { _id: studentId } = res.locals.student;
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

      return res.sendStatus(200);
    });
  }
);
