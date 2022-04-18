import { StudentModel } from "@routine-support/domains";
import { createAuthorizationMiddleware } from "./createAuthorizationMiddleware";

export const STUDENT_LOCALS_NAME = "student";

export const studentAuthorization = createAuthorizationMiddleware(
  STUDENT_LOCALS_NAME,
  StudentModel
);
