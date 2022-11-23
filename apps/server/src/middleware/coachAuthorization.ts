import { CoachModel } from "@routine-support/domains";
import { AuthNames } from "../constants/AuthNames";
import { createAuthorizationMiddleware } from "./createAuthorizationMiddleware";

export const coachAuthorization = createAuthorizationMiddleware(AuthNames.Coach, CoachModel);
