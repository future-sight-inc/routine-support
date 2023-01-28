import { parseDate, stringifyDate } from "@routine-support/utils";
import { Router } from "express";
import { filterActivitiesForStudent } from "../../utils/filterActivitiesForStudent";
import { getActivitiesOfWeek } from "../../utils/getActivitiesOfWeek";
import { getTimeRange } from "../../utils/getTimeRange";

export const dayRouter = Router();

dayRouter.get("/:date", async (req, res) => {
  const { date } = req.params;
  const student = res.locals.student;

  const activitiesOfWeek = await getActivitiesOfWeek({
    currentDate: parseDate(date),
    coachId: student.coachId,
  });

  const todaysActivities = activitiesOfWeek.filter(
    (activity) => stringifyDate(activity.date) === date
  );
  const studentActivities = filterActivitiesForStudent(todaysActivities, {
    _id: student._id,
  });

  return res.status(200).send({
    date,
    activities: studentActivities,
    timeRange: getTimeRange(),
  });
});
