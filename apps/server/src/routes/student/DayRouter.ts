import { DayJson, stringifyDay } from "@routine-support/domains";
import { parseDate } from "@routine-support/utils";
import { Response, Router } from "express";
import { ScheduleController } from "../../controllers";

export const dayRouter = Router();

dayRouter.get("/:date", async (req, res: Response<DayJson>) => {
  const date = parseDate(req.params.date);
  const studentId = res.locals.student._id;
  const daySchedule = await ScheduleController.getStudentDaySchedule({ date, studentId });

  return res.status(200).send(stringifyDay(daySchedule));
});
