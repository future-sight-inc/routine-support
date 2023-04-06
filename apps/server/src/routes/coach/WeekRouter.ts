import { stringifyWeek, WeekJson } from "@routine-support/domains";
import { Response, Router } from "express";
import { ScheduleController } from "../../controllers";
import { parseActivitiesFilter } from "../../utils/parseActivitiesFilter";

export const weekRouter = Router();

weekRouter.get("/:year/:week", async (req, res: Response<WeekJson>) => {
  const year = Number(req.params.year);
  const week = Number(req.params.week);
  const filter = parseActivitiesFilter(req.query.filter as string);
  const weekSchedule = await ScheduleController.getWeekSchedule({
    year,
    week,
    filter,
    coachId: res.locals.coach._id,
  });

  res.status(200).send(stringifyWeek(weekSchedule));
});
