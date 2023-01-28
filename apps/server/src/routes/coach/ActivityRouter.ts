import { Response, Router } from "express";
import {
  ActivityJson,
  parseActivityJson,
  stringifyActivity,
  WeekSocketEventTypeEnum,
} from "@routine-support/domains";

import { SocketUserTypeEnum } from "@routine-support/types";
import { emitToUser } from "../../main";
import { validateActivity } from "../../utils/validateActivity";
import { ActivityModel } from "../../db/models/Activity";
import { StudentModel } from "../../db/models/Student";

export const activityRouter = Router();

activityRouter.get("/:id", async (req, res: Response<ActivityJson | undefined>) => {
  const activity = await ActivityModel.findById(req.params.id);

  if (activity) {
    res.status(200).send(stringifyActivity(activity));
  }

  return res.sendStatus(404);
});

activityRouter.post("/", async (req, res) => {
  const activity = parseActivityJson(req.body);
  const validationData = await validateActivity(activity);

  if (validationData && !validationData.isValid) {
    return res.status(422).send(validationData);
  }

  await ActivityModel.create({
    ...activity,
    confirmation: {},
  });

  const coachStudents = await StudentModel.find({
    coachId: res.locals.coach._id,
  }).lean();

  coachStudents.forEach((student) =>
    emitToUser({
      userId: student._id,
      userType: SocketUserTypeEnum.Student,
      message: {
        type: WeekSocketEventTypeEnum.UpdateSchedule,
      },
    })
  );

  return res.sendStatus(200);
});

activityRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  const activity = parseActivityJson(req.body);
  const validationData = await validateActivity(activity);

  if (validationData && !validationData.isValid) {
    return res.status(422).send(validationData);
  }

  await ActivityModel.findByIdAndUpdate(id, {
    ...activity,
    confirmation: {},
  });

  const coachStudents = await StudentModel.find({
    coachId: res.locals.coach._id,
  }).lean();

  coachStudents.forEach((student) =>
    emitToUser({
      userId: student._id,
      userType: SocketUserTypeEnum.Student,
      message: {
        type: WeekSocketEventTypeEnum.UpdateSchedule,
      },
    })
  );

  return res.sendStatus(200);
});

activityRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;

  await ActivityModel.findByIdAndDelete(id);

  const coachStudents = await StudentModel.find({
    coachId: res.locals.coach._id,
  }).lean();

  coachStudents.forEach((student) =>
    emitToUser({
      userId: student._id,
      userType: SocketUserTypeEnum.Student,
      message: {
        type: WeekSocketEventTypeEnum.UpdateSchedule,
      },
    })
  );

  return res.sendStatus(200);
});
