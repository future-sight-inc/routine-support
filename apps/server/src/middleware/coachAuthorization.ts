import { CoachModel } from "@routine-support/domains";
import { createAuthorizationMiddleware } from "./createAuthorizationMiddleware";

export const COACH_LOCALS_NAME = "coach";

export const coachAuthorization = createAuthorizationMiddleware(
  COACH_LOCALS_NAME,
  CoachModel
);
