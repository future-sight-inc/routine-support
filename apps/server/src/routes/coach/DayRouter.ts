import { DayJson, stringifyDay } from "@routine-support/domains";
import { parseDate, stringifyDate } from "@routine-support/utils";
import { Response, Router } from "express";
import { filterActivities } from "../../utils/filterActivities";
import { getActivitiesOfWeek } from "../../utils/getActivitiesOfWeek";
import { getTimeRange } from "../../utils/getTimeRange";
import { parseActivitiesFilter } from "../../utils/parseActivitiesFilter";

export const dayRouter = Router();

dayRouter.get("/:date", async (req, res: Response<DayJson>) => {
  const { date } = req.params;
  const currentDate = parseDate(date);
  const coach = res.locals.coach;

  const { filter } = req.query;
  const parsedFilter = parseActivitiesFilter(filter as string);

  const activitiesOfWeek = await getActivitiesOfWeek({
    currentDate,
    coachId: coach._id,
  });
  const todaysActivities = activitiesOfWeek.filter(
    (activity) => stringifyDate(activity.date) === date
  );
  const filteredActivities = filterActivities(todaysActivities, parsedFilter);

  return res.status(200).send(
    stringifyDay({
      date: currentDate,
      activities: filteredActivities,
      timeRange: getTimeRange(),
    })
  );
});
