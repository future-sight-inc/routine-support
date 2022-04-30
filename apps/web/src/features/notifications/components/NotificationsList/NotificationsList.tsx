import React from "react";

import {
  NotificationsGroup,
  Notification as NotificationType,
  Student,
} from "@routine-support/domains";
import { isToday } from "@routine-support/utils";
import { useTranslation } from "react-i18next";

import { Notification } from "../Notification";
import * as S from "./styled";

interface NotificationListActions {
  deleteNotification: (notification: NotificationType) => void;
  clearAllNotifications: () => void;
}

interface NotificationsListProps {
  notificationsGroups: NotificationsGroup[];
  students: Student[];
  actions: NotificationListActions;
}

export const NotificationsList: React.FC<NotificationsListProps> = ({
  notificationsGroups,
  students,
  actions,
}) => {
  const { t } = useTranslation();

  return (
    <S.Wrapper>
      <S.ClearAllButton>{t("Clear all")}</S.ClearAllButton>
      {notificationsGroups.map((notificationGroup, index) => (
        <S.NotificationGroup key={index}>
          <S.NotificationGroupDate>
            {isToday(notificationGroup.date)
              ? t("Today")
              : notificationGroup.date.format("dddd DD MMM")}
          </S.NotificationGroupDate>
          <S.NotificationWrapper>
            {notificationGroup.notifications.map((notification, index) => (
              <Notification
                activity={notification.activity}
                students={students}
                isViewed={notification.isViewed}
                key={index}
                onDelete={() => actions.deleteNotification(notification)}
              />
            ))}
          </S.NotificationWrapper>
        </S.NotificationGroup>
      ))}
    </S.Wrapper>
  );
};
