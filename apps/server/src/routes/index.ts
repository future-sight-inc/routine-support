import { Router } from "express";

import { activityRouter } from "./ActivityRouter";
import { dayRouter } from "./DayRouter";
import { userRouter } from "./UserRouter";
import { weekRouter } from "./WeekRouter";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/activity", activityRouter);
router.use("/week", weekRouter);
router.use("/day", dayRouter);
router.use("/user", userRouter);

export default router;
