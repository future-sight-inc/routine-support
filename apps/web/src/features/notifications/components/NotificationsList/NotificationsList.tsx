import React from "react";

import {
  NotificationsGroup,
  Notification as NotificationType,
  Student,
} from "@routine-support/domains";
import { format, isToday } from "date-fns";
import { useTranslation } from "react-i18next";

import { Notification } from "../Notification";
import { useNotificationsListComponent } from "./hooks";
import * as S from "./styled";

export interface NotificationsListActions {
  deleteNotification: (notification: NotificationType) => void;
  clearAllNotifications: () => void;
  viewNotification: (notification: NotificationType) => void;
}

interface NotificationsListProps {
  notificationsGroups: NotificationsGroup[];
  students: Student[];
  actions: NotificationsListActions;
}

export const NotificationsList: React.FC<NotificationsListProps> = ({
  notificationsGroups,
  students,
  actions,
}) => {
  const { t } = useTranslation();
  const {
    operations: { handleClearAllNotifications },
  } = useNotificationsListComponent(actions);

  return (
    <S.Wrapper>
      {notificationsGroups.length > 0 ? (
        <>
          <S.ClearAllButton onClick={handleClearAllNotifications}>
            {t("Clear all")}
          </S.ClearAllButton>
          {notificationsGroups.map((notificationGroup, index) => (
            <S.NotificationGroup key={index}>
              <S.NotificationGroupDate>
                {isToday(notificationGroup.date)
                  ? t("Today")
                  : format(notificationGroup.date, "dddd dd MMM")}
              </S.NotificationGroupDate>
              <S.NotificationWrapper>
                {notificationGroup.notifications.map((notification, index) => (
                  <Notification
                    activity={notification.activity}
                    students={students}
                    isViewed={notification.isViewed}
                    key={index}
                    onDelete={() => actions.deleteNotification(notification)}
                    onView={() => actions.viewNotification(notification)}
                  />
                ))}
              </S.NotificationWrapper>
            </S.NotificationGroup>
          ))}
        </>
      ) : (
        <S.EmptyText>{t("No notifications")}</S.EmptyText>
      )}
    </S.Wrapper>
  );
};
