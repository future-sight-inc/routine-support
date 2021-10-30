import { Schema, model } from "mongoose";
import { Activity } from "./types";

const activitySchema = new Schema({
  name: String,
  pictogram: String,
  date: String,
  start: String,
  end: String,
});

export const ActivityModel = model<Activity>("activity", activitySchema);
