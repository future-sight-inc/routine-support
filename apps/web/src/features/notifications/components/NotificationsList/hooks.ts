import { useConfirm } from "apps/web/src/services/ConfirmationService";
import { useTranslation } from "react-i18next";

import { NotificationsListActions } from "./NotificationsList";

export const useNotificationsListComponent = (
  actions: NotificationsListActions
) => {
  const { t } = useTranslation();
  const { confirm } = useConfirm();

  const handleClearAllNotifications = () => {
    confirm({
      title: t("Confirm your action"),
      description: t("Are you sure you want to delete all notifications?"),
      onConfirm: () => {
        actions.clearAllNotifications();
      },
    });
  };

  return { operations: { handleClearAllNotifications } };
};
