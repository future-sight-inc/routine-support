import { LoginCoachDto, RegisterCoachDto } from "@routine-support/domains";
import { SubmitErrorData } from "@routine-support/types";
import { validateCoachEmail } from "./validateCoachEmail";

export const validateCoach = async (
  coach: LoginCoachDto | RegisterCoachDto
): Promise<SubmitErrorData> => {
  const validationData = await validateCoachEmail(coach.email);

  return validationData;
};
