import { createActivityFromSchema, createSchemaFromActivity } from "@routine-support/domains";
import { parseDate } from "@routine-support/utils";
import { Router } from "express";
import { filterActivitiesForStudent } from "../../utils/filterActivitiesForStudent";
import { getActivitiesOfWeek } from "../../utils/getActivitiesOfWeek";
import { getDayScheduleActivities } from "../../utils/getDayScheduleActivities";

export const dayRouter = Router();

dayRouter.get("/:date", async (req, res) => {
  const { date } = req.params;
  const student = res.locals.student;

  const activitiesOfWeek = await getActivitiesOfWeek({
    currentDate: parseDate(date),
    coachId: student.coachId,
  });
  const todaysActivities = activitiesOfWeek.filter((activity) => activity.date === date);

  const studentActivities = filterActivitiesForStudent(todaysActivities, {
    _id: student._id,
  });
  const parsedActivities = studentActivities.map(createActivityFromSchema);
  const dayScheduleActivities = getDayScheduleActivities(parsedActivities);

  return res.status(200).send({
    date,
    activities: dayScheduleActivities.map(createSchemaFromActivity),
  });
});
