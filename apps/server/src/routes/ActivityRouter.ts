import { Router } from "express";
import { ActivityModel } from "@routine-support/models";

export const activityRouter = Router();

activityRouter.get("/:id", async (req, res) => {
  const activity = await ActivityModel.findById(req.params.id);

  if (activity) {
    res.status(200).send(activity);
  }

  return res.status(404).send();
});

activityRouter.post("/", (req, res) => {
  ActivityModel.create({
    ...req.body,
  });
  res.status(200).send("Activity is added");
});

activityRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;

  ActivityModel.findByIdAndDelete(id, (err) => {
    if (err) return console.log(err);

    res.status(200).send("Activity deleted");
  });
});

activityRouter.put("/:id", (req, res) => {
  // ! _v - мусор, который летит из бд, починить !
  const { _v, ...data } = req.body;
  const id = req.params.id;

  ActivityModel.findByIdAndUpdate(
    id,
    {
      ...data,
    },
    (err) => {
      if (err) return console.log(err);

      res.status(200).send("Activity is updated");
    }
  );
});
