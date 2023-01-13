import { AuthNames } from "../constants/AuthNames";
import { CoachModel } from "../db/models/Coach";
import { createAuthorizationMiddleware } from "./createAuthorizationMiddleware";

export const coachAuthorization = createAuthorizationMiddleware(AuthNames.Coach, CoachModel);
