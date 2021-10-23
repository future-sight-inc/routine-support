import { Router } from "express";
import { Activity } from "../models/Activity";

export const activityRouter = Router();

activityRouter.get("/:id", async (req, res) => {
  const activity = await Activity.findById(req.params.id);

  if (activity) {
    res.status(200).send(activity);
  }

  return res.status(404).send();
});

activityRouter.post("/", (req, res) => {
  Activity.create({
    ...req.body,
  });
  res.status(200).send("Activity is added");
});

activityRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;

  Activity.findByIdAndDelete(id, function (err) {
    if (err) return console.log(err);

    res.status(200).send("Activity deleted");
  });
});

activityRouter.put("/:id", (req, res) => {
  // ! _v - мусор, который летит из бд, починить !
  const { _v, ...data } = req.body;
  const id = req.params.id;

  Activity.findByIdAndUpdate(
    id,
    {
      ...data,
    },
    function (err) {
      if (err) return console.log(err);

      res.status(200).send("Activity is updated");
    }
  );
});
