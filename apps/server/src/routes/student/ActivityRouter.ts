import { WeekSocketEventTypeEnum } from "@routine-support/domains";
import { SocketUserTypeEnum } from "@routine-support/types";
import { Router } from "express";
import { ActivityController } from "../../controllers";
import { emitToUser } from "../../main";

export const activityRouter = Router();

activityRouter.put("/confirm/:id", async (req, res) => {
  const activityId = req.params.id;
  const { date } = req.body;
  const { student } = res.locals;

  await ActivityController.confirmActivity(activityId, date, student);

  emitToUser({
    userId: student.coachId,
    userType: SocketUserTypeEnum.Coach,
    message: {
      type: WeekSocketEventTypeEnum.UpdateCalendar,
    },
  });

  return res.sendStatus(200);
});
