import { Router } from "express";
import {
  ActivityModel,
  confirmStudentActivity,
  StudentModel,
  WeekSocketEventTypeEnum,
} from "@routine-support/domains";
import { studentAuthorization } from "../middleware/studentAuthorization";
import { validateActivity } from "../utils/validateActivity";
import { coachAuthorization } from "../middleware/coachAuthorization";
import { SocketUserTypeEnum } from "@routine-support/types";
import { emitToUser } from "../main";

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

activityRouter.delete("/:id", coachAuthorization, async (req, res) => {
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

activityRouter.put("/confirm/:id", studentAuthorization, async (req, res) => {
  const { id } = req.params;
  const { date } = req.body;
  const { student } = res.locals;

  const activityToConfirm = await ActivityModel.findById(id);

  if (activityToConfirm) {
    confirmStudentActivity({
      student,
      activity: activityToConfirm,
      confirmationDate: date,
    });
  }

  ActivityModel.findByIdAndUpdate(id, { ...activityToConfirm }, (err) => {
    if (err) {
      console.log(err);

      return;
    }

    emitToUser({
      userId: student.coachId,
      userType: SocketUserTypeEnum.Coach,
      message: {
        type: WeekSocketEventTypeEnum.UpdateCalendar,
      },
    });

    return res.sendStatus(200);
  });
});
