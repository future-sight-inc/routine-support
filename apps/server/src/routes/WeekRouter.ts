import {
  ActivityModel,
  formatActivity,
  formatActivityDto,
  RepeatTypeEnum,
} from "@routine-support/models";
import { Router } from "express";
import { filterActivities } from "../utils/filterActivities";
import { getDaysOfWeek } from "../utils/getDaysOfWeek";
import { getStringDateRangeFromWeek } from "../utils/getStringDateRangeFromWeek";
import { getTimeRange } from "../utils/getTimeRange";
import { getWeek } from "../utils/getWeek";
import { parseWeekFilter } from "../utils/parseWeekFilter";
import { repeatActivities } from "../utils/repeatActivities";

export const weekRouter = Router();

weekRouter.get("/:year/:week", async (req, res) => {
  const { week, year } = req.params;
  const yearNumber = Number(year);
  const weekNumber = Number(week);
  const currentWeek = getDaysOfWeek({ yearNumber, weekNumber });

  const { filter } = req.query;
  const parsedFilter = parseWeekFilter(filter as string);

  let activitiesWithoutRepeat = (await ActivityModel.find({
    coachId: res.locals.user._id,
    repeat: RepeatTypeEnum.None,
  })) as any;
  activitiesWithoutRepeat = filterActivities(
    activitiesWithoutRepeat,
    parsedFilter
  );

  let activitiesWithRepeat = (await ActivityModel.find({
    coachId: res.locals.user._id,
    repeat: RepeatTypeEnum.None,
  })) as any;
  activitiesWithRepeat = filterActivities(
    activitiesWithRepeat as any,
    parsedFilter
  ) as any;
  activitiesWithRepeat = repeatActivities(
    activitiesWithRepeat.map(formatActivityDto),
    currentWeek
  );
  activitiesWithRepeat = activitiesWithRepeat.map(formatActivity);

  res.status(200).send({
    days: getWeek(
      [activitiesWithoutRepeat, ...activitiesWithRepeat],
      weekNumber,
      yearNumber
    ),
    year: yearNumber,
    week: weekNumber,
    weekInfo: {
      days: getStringDateRangeFromWeek(weekNumber, yearNumber),
      timeRange: getTimeRange(),
    },
  });
});
