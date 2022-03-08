import { model, Schema } from "mongoose";
import { Student } from "./types";

const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    coachId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

export const StudentModel = model<Student>("student", studentSchema);
