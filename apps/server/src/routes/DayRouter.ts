import {
  ActivityModel,
  createActivityFromSchema,
  createSchemaFromActivity,
} from "@routine-support/domains";
import { Router } from "express";
import { getDayScheduleActivities } from "../utils/getDayScheduleActivities";
import { filterActivitiesForStudent } from "../utils/filterActivitiesForStudent";

export const dayRouter = Router();

dayRouter.get("/:date", async (req, res) => {
  const { date } = req.params;
  const studentId = res.locals.student._id;

  const activities = await ActivityModel.find({ date }).lean();

  const studentActivities = filterActivitiesForStudent(activities, {
    _id: studentId,
  });

  const parsedActivities = studentActivities.map(createActivityFromSchema);
  const dayScheduleActivities = getDayScheduleActivities(parsedActivities);

  return res
    .status(200)
    .send({
      date,
      activities: dayScheduleActivities.map(createSchemaFromActivity),
    });
});
