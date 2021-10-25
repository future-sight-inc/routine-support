import { Document, Schema, model } from "mongoose";

export interface ActivityModel extends Document {
  name: string;
  pictogram: string;
  date: string;
  start: string;
  end: string;
}

const activitySchema = new Schema({
  name: String,
  pictogram: String,
  date: String,
  start: String,
  end: String,
});

export const Activity = model<ActivityModel>("activity", activitySchema);
