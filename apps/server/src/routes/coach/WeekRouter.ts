import { getDaysOfWeek } from "@routine-support/domains";
import { setISOWeek, setYear } from "date-fns";
import { Router } from "express";
import { filterActivities } from "../../utils/filterActivities";
import { getActivitiesOfWeek } from "../../utils/getActivitiesOfWeek";
import { getDaysOfCalendarWeek } from "../../utils/getDaysOfCalendarWeek";
import { getTimeRange } from "../../utils/getTimeRange";
import { parseActivitiesFilter } from "../../utils/parseActivitiesFilter";

export const weekRouter = Router();

weekRouter.get("/:year/:week", async (req, res) => {
  const year = Number(req.params.year);
  const week = Number(req.params.week);

  const { filter } = req.query;
  const parsedFilter = parseActivitiesFilter(filter as string);

  const activitiesOfTheWeek = await getActivitiesOfWeek({
    currentDate: setISOWeek(setYear(new Date(), year), week),
    coachId: res.locals.coach._id,
  });
  const filteredActivities = filterActivities(activitiesOfTheWeek, parsedFilter);

  res.status(200).send({
    days: getDaysOfCalendarWeek(filteredActivities, { week, year }),
    year,
    week,
    weekInfo: {
      days: getDaysOfWeek({ week, year }),
      timeRange: getTimeRange(),
    },
  });
});
