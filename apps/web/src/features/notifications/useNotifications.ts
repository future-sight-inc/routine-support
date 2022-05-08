import { useEffect, useState } from "react";

import { Notification, notificationsActions } from "@routine-support/domains";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { notificationAPI } from "../../services/ApiService";

export const useNotifications = () => {
  const [loading, setLoading] = useState(true);
  const { notificationsGroups, notViewedCount } = useAppSelector(
    (state) => state.notifications
  );
  const coachId = useAppSelector((state) => state.coach.coach?._id);
  const dispatch = useAppDispatch();

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getNotifications();
  }, []);

  const getNotifications = async (data?: { config?: { silent: boolean } }) => {
    if (coachId) {
      try {
        setError(null);

        !data?.config?.silent && setLoading(true);

        const responseData = await notificationAPI.getNotifications();

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
      await notificationAPI.deleteNotification(notification._id);
    } finally {
      getNotifications({ config: { silent: true } });
    }
  };

  const clearAllNotifications = async () => {
    try {
      await notificationAPI.deleteNotifications();
    } finally {
      getNotifications({ config: { silent: true } });
    }
  };

  const viewNotification = async (notification: Notification) => {
    try {
      await notificationAPI.viewNotification(notification._id);
    } finally {
      getNotifications({ config: { silent: true } });
    }
  };

  return {
    models: { notificationsGroups, notViewedCount, loading, error },
    operations: {
      getNotifications,
      deleteNotification,
      clearAllNotifications,
      viewNotification,
    },
  };
};
