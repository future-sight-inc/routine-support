import { Notification } from "@routine-support/domains";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCoachNotificationAPI } from "../api";
import { notificationsActions } from "../slice";
import { createNotificationsGroupFromSchema } from "../utils";

interface Deps {
  notificationApi: ReturnType<typeof createCoachNotificationAPI>;
}

export const createCoachUseNotifications =
  ({ notificationApi }: Deps) =>
    () => {
      const [loading, setLoading] = useState(false);
      const { notificationsGroups, notViewedCount } = useSelector(
        (state: any) => state.coachNotifications
      );
      const coachId = useSelector((state: any) => state.coachAuth.coach?._id);
      const dispatch = useDispatch();

      const [error, setError] = useState<string | null>(null);

      useEffect(() => {
        if (notificationsGroups.length === 0) {
          getNotifications();
        }
      }, []);

      const getNotifications = async (data?: { config?: { silent: boolean } }) => {
        if (coachId) {
          try {
            setError(null);

            !data?.config?.silent && setLoading(true);

            const responseData = await notificationApi.getNotifications();

            dispatch(notificationsActions.setNotificationsGroups(responseData));
          } catch (error: any) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        }
      };

      const deleteNotification = async (notification: Notification) => {
        try {
          await notificationApi.deleteNotification(notification._id);
        } finally {
          getNotifications({ config: { silent: true } });
        }
      };

      const clearAllNotifications = async () => {
        try {
          await notificationApi.deleteNotifications();
        } finally {
          getNotifications({ config: { silent: true } });
        }
      };

      const viewNotification = async (notification: Notification) => {
        try {
          await notificationApi.viewNotification(notification._id);
        } finally {
          getNotifications({ config: { silent: true } });
        }
      };

      // const notify = async () => {
      //   if (location.pathname !== LinkService.notifications()) {
      //     const audio = new Audio(notificationSound);

      //     await getNotifications();

      //     toast(t("Activity was missed"), {
      //       hideProgressBar: true,
      //       onClick: () => {
      //         history.push(LinkService.notifications());
      //       },
      //     });

      //     audio.play();
      //   }
      // };

      return {
        models: {
          notificationsGroups: notificationsGroups.map(createNotificationsGroupFromSchema),
          notViewedCount,
          loading,
          error,
        },
        operations: {
          getNotifications,
          deleteNotification,
          clearAllNotifications,
          viewNotification,
        // notify,
        },
      };
    };
