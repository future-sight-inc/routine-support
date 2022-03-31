import { ActivityModel, formatActivity } from "@routine-support/domains";
import { Router } from "express";
import { createDayScheduleActivities } from "../utils/createDayScheduleActivities";
import { filterActivitiesForStudent } from "../utils/filterActivitiesForStudent";

export const dayRouter = Router();

dayRouter.get("/:date", async (req, res) => {
  const { date } = req.params;
  const studentId = res.locals.student._id;

  const activities = await ActivityModel.find({ date }).lean();
  const studentActivities = filterActivitiesForStudent(activities, studentId);
  const dayScheduleActivities = createDayScheduleActivities(studentActivities);

  return res
    .status(200)
    .send({ date, activities: dayScheduleActivities.map(formatActivity) });
});
