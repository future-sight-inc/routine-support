import { FormError } from "@routine-support/types";
import { CoachModel } from "../db/models/Coach";

export const validateCoachEmail = async (email: string) => {
  const isEmailValid = (await CoachModel.find({ email }).countDocuments()) === 0;
  const emailError: FormError = {
    name: "email",
    message: "Invalid email error",
  };

  if (isEmailValid) {
    return { isValid: true };
  }

  throw { isValid: false, errors: [emailError] };
};
