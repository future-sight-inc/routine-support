import { LanguageEnum } from "@routine-support/types";
import { model, Schema } from "mongoose";
import { ClockTypeEnum, Student } from "./types";

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
    pinCode: {
      type: String,
      required: true,
      default: "0000",
    },
    clockType: {
      type: Number,
      required: true,
      default: ClockTypeEnum.Analog,
    },
    language: {
      type: String,
      required: true,
      default: LanguageEnum.En,
    },
  },
  { versionKey: false }
);

export const StudentModel = model<Student>("student", studentSchema);
