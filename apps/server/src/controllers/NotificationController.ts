import { NotificationsGroup } from "@routine-support/domains";
import { NotificationModel } from "../db/models/Notification";
import { groupNotifications } from "../utils/groupNotifications";

export const NotificationController = {
  getAll: async (
    coachId: string
  ): Promise<{ notificationGroups: NotificationsGroup[]; notViewedCount: number }> => {
    const notifications = await NotificationModel.find({
      coachId: coachId,
    }).lean();

    const notViewedCount =
      notifications.filter((notification) => !notification.isViewed)?.length || 0;
    const notificationGroups = groupNotifications(notifications);

    return {
      notViewedCount,
      notificationGroups,
    };
  },
  setViewed: async (notificationId: string): Promise<void> => {
    await NotificationModel.findByIdAndUpdate(notificationId, {
      isViewed: true,
    });
  },
  delete: async (notificationId: string): Promise<void> => {
    await NotificationModel.findByIdAndDelete(notificationId);
  },
  deleteAll: async (coachId: string): Promise<void> => {
    await NotificationModel.deleteMany({ coachId });
  },
};
