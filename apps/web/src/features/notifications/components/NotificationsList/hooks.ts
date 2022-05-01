import { useTranslation } from "react-i18next";

import { NotificationsListActions } from "./NotificationsList";

export const useNotificationsListComponent = (
  actions: NotificationsListActions
) => {
  const { t } = useTranslation();

  const handleClearAllNotifications = () => {
    if (window.confirm(t("Confirm your action"))) {
      actions.clearAllNotifications();
    }
  };

  return { operations: { handleClearAllNotifications } };
};
