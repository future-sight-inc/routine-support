import { useEffect, useState } from "react";

import {
  createNotificationsGroupFromSchema,
  Notification,
  notificationsActions,
} from "@routine-support/domains";
import { useAppDispatch, useAppSelector } from "apps/mobile/src/app/hooks";
import { coachNotificationAPI } from "apps/mobile/src/services/ApiService";
import { Alert } from "react-native";

export const useNotifications = () => {
  // const location = useLocation();

  const [loading, setLoading] = useState(true);
  const { notificationsGroups, notViewedCount } = useAppSelector(
    (state) => state.coachNotifications
  );
  const coachId = useAppSelector((state) => state.coachAuth.coach?._id);
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

        const responseData = await coachNotificationAPI.getNotifications();

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
      await coachNotificationAPI.deleteNotification(notification._id);
    } finally {
      getNotifications({ config: { silent: true } });
    }
  };

  const clearAllNotifications = async () => {
    Alert.alert(
      "Confirm your action",
      "",
      [
        {
          text: "Cancel",

          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: async () => {
            try {
              await coachNotificationAPI.deleteNotifications();
            } finally {
              getNotifications({ config: { silent: true } });
            }
          },
          style: "default",
        },
      ],
      {
        cancelable: true,
        onDismiss: () => null,
      }
    );
  };

  const viewNotification = async (notification: Notification) => {
    try {
      await coachNotificationAPI.viewNotification(notification._id);
    } finally {
      getNotifications({ config: { silent: true } });
    }
  };

  const notify = async () => {
    // if (location.pathname !== LinkService.coach.notifications()) {
    // const audio = new Audio(notificationSound);
    // await getNotifications();
    // toast(t("Activity was missed"), {
    //   hideProgressBar: true,
    //   onClick: () => {
    //     history.push(LinkService.notifications());
    //   },
    // });
    // audio.play();
    // }
  };

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
      notify,
    },
  };
};
