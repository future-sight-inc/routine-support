import { DayJson, stringifyDay } from "@routine-support/domains";
import { parseDate } from "@routine-support/utils";
import { Response, Router } from "express";
import { ScheduleController } from "../../controllers";
import { parseActivitiesFilter } from "../../utils/parseActivitiesFilter";

export const dayRouter = Router();

dayRouter.get("/:date", async (req, res: Response<DayJson>) => {
  const coachId = res.locals.coach._id;
  const date = parseDate(req.params.date);
  const filter = parseActivitiesFilter(req.query.filter as string);
  const daySchedule = await ScheduleController.getCoachDaySchedule({ date, filter, coachId });

  return res.status(200).send(stringifyDay(daySchedule));
});
