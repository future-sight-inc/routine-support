import { Notification } from "@routine-support/domains";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CoachState } from "../../auth/slice";
import { createCoachNotificationAPI } from "../api";
import { notificationsActions, NotificationsState } from "../slice";

interface State {
  coachAuth: CoachState;
  coachNotifications: NotificationsState;
}

interface Deps {
  notificationApi: ReturnType<typeof createCoachNotificationAPI>;
  useStoreState: () => State;
}

const useNotifications = ({ notificationApi, useStoreState }: Deps) => {
  const { coachAuth, coachNotifications } = useStoreState();
  const { notificationsGroups, notViewedCount } = coachNotifications;
  const coachId = coachAuth.coach?._id;

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getNotifications();
  }, []);

  const getNotifications = async (data?: { config?: { silent: boolean } }) => {
    if (coachId) {
      try {
        setError(null);

        !data?.config?.silent && setLoading(true);

        const responseData = await notificationApi.getNotifications();

        dispatch(notificationsActions.setNotificationsGroups(responseData));
      } catch {
        setError("Error during fetching!");
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

  return {
    models: {
      notificationsGroups,
      notViewedCount,
      loading,
      error,
    },
    operations: {
      getNotifications,
      deleteNotification,
      clearAllNotifications,
      viewNotification,
    },
  };
};

export const createCoachUseNotifications = (deps: Deps) => () => useNotifications(deps);
