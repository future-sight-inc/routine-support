import { WeekSocketEventTypeEnum } from "@routine-support/domains";
import { SocketUserTypeEnum } from "@routine-support/types";
import { Router } from "express";
import { ActivityController, StudentController } from "../../controllers";
import { emitToUser } from "../../main";
import { coachAuthorization } from "../../middleware/coachAuthorization";

export const studentRouter = Router();

studentRouter.post("/", coachAuthorization, async (req, res) => {
  await StudentController.create(req.body, res.locals.coach._id);

  return res.sendStatus(200);
});

studentRouter.put("/:id", async (req, res) => {
  await StudentController.update(req.params.id, req.body);

  // todo Вынести в отдельный сервис/контроллер
  emitToUser({
    userId: req.params.id,
    userType: SocketUserTypeEnum.Student,
    message: {
      type: WeekSocketEventTypeEnum.UpdateSettings,
      data: req.body,
    },
  });

  res.sendStatus(200);
});

studentRouter.delete("/:id", async (req, res) => {
  const studentId = req.params.id;

  await StudentController.delete(studentId);
  await ActivityController.removeStudentFromAllActivities(studentId);

  res.sendStatus(200);
});

studentRouter.get("/coach/:id", coachAuthorization, async (req, res) => {
  const students = await StudentController.getAllByCoachId(req.params.id);

  return res.status(200).send(students);
});
