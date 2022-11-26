import { Coach } from "@routine-support/domains";
import { SubmitErrorData } from "@routine-support/forms";
import { validateCoachEmail } from "./validateCoachEmail";

export const validateCoach = async (
  coach: Coach
): Promise<SubmitErrorData | undefined> => {
  try {
    await validateCoachEmail(coach.email);

    return;
  } catch (error) {
    return error as SubmitErrorData;
  }
};
