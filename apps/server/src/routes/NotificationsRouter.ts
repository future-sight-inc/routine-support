import {
  createNotificationFromSchema,
  createSchemaFromNotificationGroup,
  NotificationModel,
} from "@routine-support/domains";
import { Router } from "express";
import { coachAuthorization } from "../middleware/coachAuthorization";
import { groupNotifications } from "../utils/groupNotifications";

export const notificationsRouter = Router();

notificationsRouter.get("/", coachAuthorization, async (__, res) => {
  const notifications = await NotificationModel.find({
    coachId: res.locals.coach._id,
  }).lean();

  const notViewedCount =
    notifications.filter((notification) => !notification.isViewed)?.length || 0;
  const notificationGroups = groupNotifications(
    notifications.map(createNotificationFromSchema)
  );

  return res.status(200).send({
    notViewedCount,
    notificationsGroups: notificationGroups.map(
      createSchemaFromNotificationGroup
    ),
  });
});

notificationsRouter.put("/view/:id", coachAuthorization, async (req, res) => {
  await NotificationModel.findByIdAndUpdate(req.params.id, {
    isViewed: true,
  });

  return res.sendStatus(200);
});

notificationsRouter.delete("/:id", coachAuthorization, async (req, res) => {
  await NotificationModel.findByIdAndDelete(req.params.id);

  return res.sendStatus(200);
});

notificationsRouter.delete("/", coachAuthorization, async (req, res) => {
  await NotificationModel.deleteMany({ coachId: res.locals.coach._id });

  return res.sendStatus(200);
});
