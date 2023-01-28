import { DayJson, stringifyDay } from "@routine-support/domains";
import { parseDate, stringifyDate } from "@routine-support/utils";
import { Response, Router } from "express";
import { filterActivitiesForStudent } from "../../utils/filterActivitiesForStudent";
import { getActivitiesOfWeek } from "../../utils/getActivitiesOfWeek";
import { getTimeRange } from "../../utils/getTimeRange";

export const dayRouter = Router();

dayRouter.get("/:date", async (req, res: Response<DayJson>) => {
  const { date } = req.params;
  const currentDate = parseDate(date);
  const student = res.locals.student;

  const activitiesOfWeek = await getActivitiesOfWeek({
    currentDate,
    coachId: student.coachId,
  });

  const todaysActivities = activitiesOfWeek.filter(
    (activity) => stringifyDate(activity.date) === date
  );
  const studentActivities = filterActivitiesForStudent(todaysActivities, {
    _id: student._id,
  });

  return res.status(200).send(
    stringifyDay({
      date: currentDate,
      activities: studentActivities,
      timeRange: getTimeRange(),
    })
  );
});
