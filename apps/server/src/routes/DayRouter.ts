import {
  ActivityModel,
  createActivityFromSchema,
  createSchemaFromActivity,
  getDaysOfWeek,
  RepeatTypeEnum,
} from "@routine-support/domains";
import { Router } from "express";
import { getDayScheduleActivities } from "../utils/getDayScheduleActivities";
import { filterActivitiesForStudent } from "../utils/filterActivitiesForStudent";
import { repeatActivities } from "../utils/repeatActivities";
import { parseDate } from "@routine-support/utils";

export const dayRouter = Router();

// todo Упростить логику, написать тесты для функций
dayRouter.get("/:date", async (req, res) => {
  const { date } = req.params;
  const student = res.locals.student;

  const currentWeek = getDaysOfWeek({
    year: parseDate(date).year(),
    week: parseDate(date).isoWeek(),
  });

  const activitiesWithoutRepeat = await ActivityModel.find({
    coachId: student.coachId,
    repeatType: RepeatTypeEnum.None,
  }).lean();

  let activitiesWithRepeat = await ActivityModel.find({
    coachId: student.coachId,
    repeatType: { $gt: RepeatTypeEnum.None },
  }).lean();

  activitiesWithRepeat = repeatActivities(activitiesWithRepeat, currentWeek);

  const activities = [
    ...activitiesWithoutRepeat,
    ...activitiesWithRepeat,
  ].filter((activity) => activity.date === date);

  const studentActivities = filterActivitiesForStudent(activities, {
    _id: student._id,
  });

  const parsedActivities = studentActivities.map(createActivityFromSchema);
  const dayScheduleActivities = getDayScheduleActivities(parsedActivities);

  return res.status(200).send({
    date,
    activities: dayScheduleActivities.map(createSchemaFromActivity),
  });
});
