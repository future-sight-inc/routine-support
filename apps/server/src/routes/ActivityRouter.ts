import { Router } from "express";
import { ActivityModel } from "@routine-support/models";

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
  res.sendStatus(200);
});

activityRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;

  ActivityModel.findByIdAndDelete(id, (err) => {
    if (err) return console.log(err);

    res.sendStatus(200);
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
      if (err) return console.log(err);

      res.sendStatus(200);
    }
  );
});
