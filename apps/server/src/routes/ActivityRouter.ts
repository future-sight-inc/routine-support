import { Router } from "express";
import { ActivityModel } from "@routine-support/domains";

export const activityRouter = Router();

activityRouter.get("/:id", async (req, res) => {
  const activity = await ActivityModel.findById(req.params.id);

  if (activity) {
    res.status(200).send(activity);
  }

  return res.sendStatus(404);
});

activityRouter.post("/", (req, res) => {
  ActivityModel.create({
    ...req.body,
  });

  return res.sendStatus(200);
});

activityRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;

  ActivityModel.findByIdAndDelete(id, (err) => {
    if (err) return console.log(err);

    return res.sendStatus(200);
  });
});

activityRouter.put("/:id", (req, res) => {
  const id = req.params.id;

  ActivityModel.findByIdAndUpdate(
    id,
    {
      ...req.body,
    },
    (err) => {
      if (err) {
        console.log(err);

        return;
      }

      return res.sendStatus(200);
    }
  );
});

activityRouter.put("/confirm/:id/:date/", async (req, res) => {
  const { id, date } = req.params;
  const { _id: studentId } = res.locals.student;

  const updatedActivity = await ActivityModel.findById(id);

  if (!updatedActivity.confirmation[date]) {
    updatedActivity.confirmation[date] = [];
  }

  updatedActivity.confirmation[date].push(studentId);

  ActivityModel.findByIdAndUpdate(id, { ...updatedActivity }, (err) => {
    if (err) {
      console.log(err);

      return;
    }

    return res.sendStatus(200);
  });
});
