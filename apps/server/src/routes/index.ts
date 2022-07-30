import { Router } from "express";
import { coachRouter } from "./coach";
import { studentRouter } from "./student";

export const router = Router();

router.use("/student", studentRouter);
router.use("/coach", coachRouter);
