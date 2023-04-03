import { DayJson, stringifyDay } from "@routine-support/domains";
import { parseDate } from "@routine-support/utils";
import { Response, Router } from "express";
import { ActivityModel } from "../../db/models/Activity";
import { filterActivities } from "../../utils/filterActivities";
import { getTimeRange } from "../../utils/getTimeRange";
import { parseActivitiesFilter } from "../../utils/parseActivitiesFilter";

export const dayRouter = Router();

dayRouter.get("/:date", async (req, res: Response<DayJson>) => {
  const { date } = req.params;
  const currentDate = parseDate(date);

  const { filter } = req.query;
  const parsedFilter = parseActivitiesFilter(filter as string);

  const todaysActivities = await ActivityModel.find({ date: currentDate }).lean({ getters: true });

  const filteredActivities = filterActivities(todaysActivities, parsedFilter);

  return res.status(200).send(
    stringifyDay({
      date: currentDate,
      activities: filteredActivities,
      timeRange: getTimeRange(),
    })
  );
});
