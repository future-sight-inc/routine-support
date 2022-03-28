import { ActivityModel, RepeatTypeEnum } from "@routine-support/domains";
import { Router } from "express";
import { filterActivities } from "../utils/filterActivities";
import { getDateStringRangeFromWeek } from "../utils/getDateStringRangeFromWeek";
import { getDaysOfWeek } from "../utils/getDaysOfWeek";
import { getTimeRange } from "../utils/getTimeRange";
import { getDaysOfCalendarWeek } from "../utils/getDaysOfCalendarWeek";
import { parseActivitiesFilter } from "../utils/parseActivitiesFilter";
import { repeatActivities } from "../utils/repeatActivities";

export const weekRouter = Router();

weekRouter.get("/:year/:week", async (req, res) => {
  const { week, year } = req.params;
  const yearNumber = Number(year);
  const weekNumber = Number(week);
  const currentWeek = getDaysOfWeek({ yearNumber, weekNumber });

  const { filter } = req.query;
  const parsedFilter = parseActivitiesFilter(filter as string);

  let activitiesWithoutRepeat = await ActivityModel.find({
    coachId: res.locals.user._id,
    repeatType: RepeatTypeEnum.None,
  }).lean();

  activitiesWithoutRepeat = filterActivities(
    activitiesWithoutRepeat,
    parsedFilter
  );

  let activitiesWithRepeat = await ActivityModel.find({
    coachId: res.locals.user._id,
    repeatType: { $gt: RepeatTypeEnum.None },
  }).lean();

  activitiesWithRepeat = filterActivities(activitiesWithRepeat, parsedFilter);
  activitiesWithRepeat = repeatActivities(activitiesWithRepeat, currentWeek);

  res.status(200).send({
    days: getDaysOfCalendarWeek(
      [...activitiesWithoutRepeat, ...activitiesWithRepeat],
      { weekNumber, yearNumber }
    ),
    year: yearNumber,
    week: weekNumber,
    weekInfo: {
      days: getDateStringRangeFromWeek({ weekNumber, yearNumber }),
      timeRange: getTimeRange(),
    },
  });
});
