import React from "react";

import { WeekSocketEventTypeEnum } from "@routine-support/domains";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import { ContentWrapper } from "../../components/ContentWrapper";
import { useSocketEventListener } from "../coach/hooks/useSocketEventListener";
import { useStudents } from "../students/useStudents";
import { NotificationsList } from "./components/NotificationsList/NotificationsList";
import { useNotifications } from "./useNotifications";

export const Notifications: React.FC = () => {
  const { t } = useTranslation();

  const Notifications = useNotifications();
  const Students = useStudents();

  useSocketEventListener(WeekSocketEventTypeEnum.UpdateNotifications, () => {
    Notifications.operations.getNotifications({ config: { silent: true } });
  });

  return (
    <ContentWrapper
      loading={Notifications.models.loading}
      error={Notifications.models.error}
    >
      <Helmet>
        <title>{t("Notifications")}</title>
      </Helmet>
      <NotificationsList
        notificationsGroups={Notifications.models.notificationsGroups}
        students={Students.models.students}
        actions={{
          deleteNotification: Notifications.operations.deleteNotification,
          clearAllNotifications: Notifications.operations.clearAllNotifications,
          viewNotification: Notifications.operations.viewNotification,
        }}
      />
    </ContentWrapper>
  );
};
