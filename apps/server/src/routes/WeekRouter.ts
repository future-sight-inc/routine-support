import { ActivityModel } from "@routine-support/models";
import { Router } from "express";
import { getDateRangeFromWeek } from "../utils/getDateRangeFromWeek";
import { getTimeRange } from "../utils/getTimeRange";

import { getWeek } from "../utils/getWeek";

export const weekRouter = Router();

weekRouter.get("/:year/:week", async (req, res) => {
  const { params } = req;
  const activities = await ActivityModel.find();
  const year = Number(params.year);
  const week = Number(params.week);

  res.status(200).send({
    days: getWeek(activities, week, year),
    year: week,
    week: week,
    weekInfo: {
      days: getDateRangeFromWeek(week, year),
      timeRange: getTimeRange(),
    },
  });
});
