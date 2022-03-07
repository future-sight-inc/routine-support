import { ActivityModel } from "@routine-support/domains";
import { Router } from "express";
import { filterActivitiesForStudent } from "../utils/filterActivitiesForStudent";

export const dayRouter = Router();

dayRouter.get("/:date", async (req, res) => {
  const { date } = req.params;

  let activities = await ActivityModel.find({ date }).lean();
  activities = filterActivitiesForStudent(activities, res.locals.student._id);

  return res.status(200).send({ date, activities });
});
