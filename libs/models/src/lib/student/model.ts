import { Schema, model } from "mongoose";
import { Student } from "./types";

const studentSchema = new Schema({
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
});

export const StudentModel = model<Student>("student", studentSchema);
