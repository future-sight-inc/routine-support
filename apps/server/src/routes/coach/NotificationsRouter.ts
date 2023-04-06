import { NotificationsGroupJson, stringifyNotificationsGroup } from "@routine-support/domains";
import { Response, Router } from "express";
import { NotificationController } from "../../controllers";
import { coachAuthorization } from "../../middleware/coachAuthorization";

export const notificationsRouter = Router();

notificationsRouter.get(
  "/",
  coachAuthorization,
  async (
    __,
    res: Response<{ notViewedCount: number; notificationsGroups: NotificationsGroupJson[] }>
  ) => {
    const { notViewedCount, notificationGroups } = await NotificationController.getAll(
      res.locals.coach._id
    );

    return res.status(200).send({
      notViewedCount,
      notificationsGroups: notificationGroups.map(stringifyNotificationsGroup),
    });
  }
);

notificationsRouter.put("/view/:id", coachAuthorization, async (req, res) => {
  await NotificationController.setViewed(req.params.id);

  return res.sendStatus(200);
});

notificationsRouter.delete("/:id", coachAuthorization, async (req, res) => {
  await NotificationController.delete(req.params.id);

  return res.sendStatus(200);
});

notificationsRouter.delete("/", coachAuthorization, async (__, res) => {
  await NotificationController.deleteAll(res.locals.coach._id);

  return res.sendStatus(200);
});
