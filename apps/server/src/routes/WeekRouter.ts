import {
  ActivityModel,
  getDaysOfWeek,
  RepeatTypeEnum,
} from "@routine-support/domains";
import { Router } from "express";
import { filterActivities } from "../utils/filterActivities";
import { getDateStringRangeFromWeek } from "../utils/getDateStringRangeFromWeek";
import { getTimeRange } from "../utils/getTimeRange";
import { getDaysOfCalendarWeek } from "../utils/getDaysOfCalendarWeek";
import { parseActivitiesFilter } from "../utils/parseActivitiesFilter";
import { repeatActivities } from "../utils/repeatActivities";
import { COACH_LOCALS_NAME } from "../middleware/coachAuthorization";

export const weekRouter = Router();

weekRouter.get("/:year/:week", async (req, res) => {
  const year = Number(req.params.year);
  const week = Number(req.params.week);
  const currentWeek = getDaysOfWeek({ year, week });

  const { filter } = req.query;
  const parsedFilter = parseActivitiesFilter(filter as string);

  let activitiesWithoutRepeat = await ActivityModel.find({
    coachId: res.locals[COACH_LOCALS_NAME]._id,
    repeatType: RepeatTypeEnum.None,
  }).lean();

  activitiesWithoutRepeat = filterActivities(
    activitiesWithoutRepeat,
    parsedFilter
  );

  let activitiesWithRepeat = await ActivityModel.find({
    coachId: res.locals[COACH_LOCALS_NAME]._id,
    repeatType: { $gt: RepeatTypeEnum.None },
  }).lean();

  activitiesWithRepeat = filterActivities(activitiesWithRepeat, parsedFilter);
  activitiesWithRepeat = repeatActivities(activitiesWithRepeat, currentWeek);

  res.status(200).send({
    days: getDaysOfCalendarWeek(
      [...activitiesWithoutRepeat, ...activitiesWithRepeat],
      { week, year }
    ),
    year,
    week,
    weekInfo: {
      days: getDateStringRangeFromWeek({ week, year }),
      timeRange: getTimeRange(),
    },
  });
});
