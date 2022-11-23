import { StudentModel } from "@routine-support/domains";
import { AuthNames } from "../constants/AuthNames";
import { createAuthorizationMiddleware } from "./createAuthorizationMiddleware";

export const studentAuthorization = createAuthorizationMiddleware(AuthNames.Student, StudentModel);
