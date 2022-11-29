import { Coach } from "@routine-support/domains";
import { model, Schema } from "mongoose";

const coachSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  { versionKey: false }
);

export const CoachModel = model<Coach>("coach", coachSchema);
