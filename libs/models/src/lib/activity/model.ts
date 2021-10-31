import { Schema, model } from "mongoose";
import { Activity } from "./types";

const activitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  pictogram: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
});

export const ActivityModel = model<Activity>("activity", activitySchema);
