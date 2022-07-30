import { Router } from "express";
import { coachAuthorization } from "../../middleware/coachAuthorization";
import { activityRouter } from "./ActivityRouter";
import { authRouter } from "./AuthRouter";
import { dayRouter } from "./DayRouter";
import { notificationsRouter } from "./NotificationsRouter";
import { studentRouter } from "./StudentRouter";
import { weekRouter } from "./WeekRouter";

export const coachRouter = Router();

coachRouter.use("/activity", coachAuthorization, activityRouter);
coachRouter.use("/week", coachAuthorization, weekRouter);
coachRouter.use("/day", coachAuthorization, dayRouter);
coachRouter.use("/auth", authRouter);
coachRouter.use("/student", studentRouter);
coachRouter.use("/notifications", notificationsRouter);
