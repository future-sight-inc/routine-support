import { ActivityModel } from "@routine-support/domains";
import { Router } from "express";

export const dayRouter = Router();

dayRouter.get("/:date", async (req, res) => {
  const { date } = req.params;

  await ActivityModel.find({ date }, (err, activities) => {
    if (err) {
      return res.sendStatus(400);
    }

    const filteredActivities = activities.filter((activity) => {
      if (!activity.students) {
        return true;
      }

      return activity.students.includes(res.locals.student._id);
    });

    return res.status(200).send({ date, activities: filteredActivities });
  });
});
