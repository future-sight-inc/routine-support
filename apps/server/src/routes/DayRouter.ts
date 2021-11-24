import { ActivityModel } from "@routine-support/models";
import { Router } from "express";
import moment = require("moment");
import { DATE_FORMAT } from "../constants/DateFormat";

import { getWeek } from "../utils/getWeek";

export const dayRouter = Router();

dayRouter.get("/:date", async (req, res) => {
  const { date } = req.params;
  const week = moment(date, DATE_FORMAT).isoWeek();
  const year = moment(date, DATE_FORMAT).year();
  const activities = await ActivityModel.find();

  // ! Будет делаться в #27
  // const day = getWeek(activities, week, year).find(
  //   (item) => item.date === date
  // );
  // return res.status(200).send(day);
});
