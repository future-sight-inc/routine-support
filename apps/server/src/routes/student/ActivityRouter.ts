import { Router } from "express";
import { confirmStudentActivity, WeekSocketEventTypeEnum } from "@routine-support/domains";
import { SocketUserTypeEnum } from "@routine-support/types";
import { emitToUser } from "../../main";
import { ActivityModel } from "../../db/models/Activity";

export const activityRouter = Router();

activityRouter.put("/confirm/:id", async (req, res) => {
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
