import { FormError } from "@routine-support/types";
import { CoachModel } from "../db/models/Coach";

export const validateCoachEmail = async (email: string) => {
  const isEmailValid = Boolean(await CoachModel.findOne({ email: email.toLowerCase() }));
  const emailError: FormError = {
    name: "email",
    message: "Invalid email error",
  };

  if (isEmailValid) {
    return { isValid: true };
  }

  return { isValid: false, errors: [emailError] };
};
