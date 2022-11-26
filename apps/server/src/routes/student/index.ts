import { Router } from "express";
import { studentAuthorization } from "../../middleware/studentAuthorization";
import { activityRouter } from "./ActivityRouter";
import { dayRouter } from "./DayRouter";
import { authRouter } from "./AuthRouter";

export const studentRouter = Router();

studentRouter.use("/activity", activityRouter);
studentRouter.use("/day", studentAuthorization, dayRouter);
studentRouter.use("/auth", authRouter);
