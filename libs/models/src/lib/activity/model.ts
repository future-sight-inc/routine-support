import { Schema, model } from "mongoose";
import { Activity, RepeatTypeEnum } from "./types";

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
  coachId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  repeat: {
    type: Number,
    default: RepeatTypeEnum.None,
  },
});

export const ActivityModel = model<Activity>("activity", activitySchema);
