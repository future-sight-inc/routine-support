import { useEffect, useState } from "react";

import { Notification, notificationsActions } from "@routine-support/domains";
import { useTranslation } from "react-i18next";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { coachNotificationAPI } from "../../services/ApiService";
import { LinkService } from "../../services/LinkService";
import notificationSound from "./notificationSound.mp3";

export const useNotifications = () => {
  const location = useLocation();
  const history = useHistory();
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);
  const { notificationsGroups, notViewedCount } = useAppSelector((state) => state.notifications);
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
    try {
      await coachNotificationAPI.deleteNotifications();
    } finally {
      getNotifications({ config: { silent: true } });
    }
  };

  const viewNotification = async (notification: Notification) => {
    try {
      await coachNotificationAPI.viewNotification(notification._id);
    } finally {
      getNotifications({ config: { silent: true } });
    }
  };

  const notify = async () => {
    if (location.pathname !== LinkService.notifications()) {
      const audio = new Audio(notificationSound);

      await getNotifications();

      toast(t("Activity was missed"), {
        hideProgressBar: true,
        onClick: () => {
          history.push(LinkService.notifications());
        },
      });

      audio.play();
    }
  };

  return {
    models: { notificationsGroups, notViewedCount, loading, error },
    operations: {
      getNotifications,
      deleteNotification,
      clearAllNotifications,
      viewNotification,
      notify,
    },
  };
};
