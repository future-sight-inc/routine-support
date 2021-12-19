import { ActivityModel, RepeatTypeEnum } from "@routine-support/domains";
import { Router } from "express";
import { filterActivities } from "../utils/filterActivities";
import { getStringDateRangeFromWeek } from "../utils/getStringDateRangeFromWeek";
import { getTimeRange } from "../utils/getTimeRange";
import { getWeek } from "../utils/getWeek";
import { repeatActivity } from "../utils/repeatActivity";

export const weekRouter = Router();

weekRouter.get("/:year/:week", async (req, res) => {
  const { params } = req;
  const { filter } = req.query;

  let parsedFilter = undefined;

  if (filter) {
    parsedFilter = (filter as string).split(",");
  }

  ActivityModel.find(
    {
      coachId: res.locals.user._id,
      repeat: RepeatTypeEnum.None,
    },
    (err, pureActivities) => {
      if (err) {
        return res.sendStatus(400);
      }

      ActivityModel.find(
        {
          coachId: res.locals.user._id,
          repeat: { $gt: RepeatTypeEnum.None },
        },
        (err, activitiesToRepeat) => {
          if (err) {
            return res.sendStatus(400);
          }

          const yearNumber = Number(params.year);
          const weekNumber = Number(params.week);

          let activities = [].concat(pureActivities);
          activities = filterActivities(activities, parsedFilter);

          activitiesToRepeat = filterActivities(
            activitiesToRepeat,
            parsedFilter
          );
          activitiesToRepeat
            .map((activity) =>
              repeatActivity(activity, activity.repeat, weekNumber, yearNumber)
            )
            .forEach((subActivities) => {
              activities = activities.concat(subActivities);
            });

          res.status(200).send({
            days: getWeek(activities, weekNumber, yearNumber),
            year: yearNumber,
            week: weekNumber,
            weekInfo: {
              days: getStringDateRangeFromWeek(weekNumber, yearNumber),
              timeRange: getTimeRange(),
            },
          });
        }
      );
    }
  );
});
