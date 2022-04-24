import { CoachModel } from "@routine-support/domains";
import { FormError } from "@routine-support/types";

export const validateCoachEmail = async (email: string) => {
  const isEmailValid =
    (await CoachModel.find({ email }).countDocuments()) === 0;
  const emailError: FormError = {
    name: "email",
    message: "User with this email already exists",
  };

  if (isEmailValid) {
    return { isValid: true };
  }

  throw { isValid: false, errors: [emailError] };
};
