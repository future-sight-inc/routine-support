import { parseDate } from "@routine-support/utils";
import { Router } from "express";
import { getActivitiesOfWeek } from "../../utils/getActivitiesOfWeek";

export const dayRouter = Router();

dayRouter.get("/:date", async (req, res) => {
  const { date } = req.params;
  const coach = res.locals.coach;

  const activitiesOfWeek = await getActivitiesOfWeek({
    currentDate: parseDate(date),
    coachId: coach._id,
  });
  const todaysActivities = activitiesOfWeek.filter((activity) => activity.date === date);

  return res.status(200).send({
    date,
    activities: todaysActivities,
  });
});
