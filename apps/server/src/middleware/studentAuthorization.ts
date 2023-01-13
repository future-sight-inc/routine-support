import { AuthNames } from "../constants/AuthNames";
import { StudentModel } from "../db/models/Student";
import { createAuthorizationMiddleware } from "./createAuthorizationMiddleware";

export const studentAuthorization = createAuthorizationMiddleware(AuthNames.Student, StudentModel);
