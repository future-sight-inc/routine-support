import { Router } from "express";
import { authorization } from "../middleware/authorization";
import { studentAuthorization } from "../middleware/studentAuthorization";

import { activityRouter } from "./ActivityRouter";
import { dayRouter } from "./DayRouter";
import { studentRouter } from "./StudentRouter";
import { userRouter } from "./UserRouter";
import { weekRouter } from "./WeekRouter";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/activity", authorization, activityRouter);
router.use("/week", authorization, weekRouter);
router.use("/day", studentAuthorization, dayRouter);
router.use("/user", userRouter);
router.use("/student", studentRouter);

export default router;
