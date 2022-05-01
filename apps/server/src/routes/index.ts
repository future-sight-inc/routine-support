import { Router } from "express";
import { coachAuthorization } from "../middleware/coachAuthorization";
import { studentAuthorization } from "../middleware/studentAuthorization";
import { activityRouter } from "./ActivityRouter";
import { coachRouter } from "./CoachRouter";
import { dayRouter } from "./DayRouter";
import { notificationsRouter } from "./NotificationsRouter";
import { studentRouter } from "./StudentRouter";
import { weekRouter } from "./WeekRouter";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/activity", activityRouter);
router.use("/week", coachAuthorization, weekRouter);
router.use("/day", studentAuthorization, dayRouter);
router.use("/coach", coachRouter);
router.use("/student", studentRouter);
router.use("/notifications", notificationsRouter);

export default router;
