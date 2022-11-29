import { ClockTypeEnum, ColorEnum, Student } from "@routine-support/domains";
import { LanguageEnum } from "@routine-support/types";
import { model, Schema } from "mongoose";

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
      type: Number,
      required: true,
      default: ColorEnum.Purple,
    },
    pinCode: {
      type: String,
      required: true,
      default: "0000",
    },
    clockType: {
      type: Number,
      required: true,
      default: ClockTypeEnum.Digital,
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
