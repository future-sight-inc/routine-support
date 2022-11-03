import React from "react";

import { WeekSocketEventTypeEnum } from "@routine-support/domains";
import { Button } from "apps/mobile/src/components/Button";
import { LoadingScreen } from "apps/mobile/src/components/LoadingScreen";

import { useSocketEventListener } from "../../student/student/hooks/useSocketEventListener";
import { useStudents } from "../students/useStudents";
import { NotificationsLayout } from "./components/NotificationsLayout";
import { NotificationsList } from "./components/NotificationsList";
import { useNotifications } from "./useNotifications";

export const Notifications: React.FC = () => {
  const Notifications = useNotifications();
  const Students = useStudents();

  useSocketEventListener(WeekSocketEventTypeEnum.UpdateNotifications, () => {
    Notifications.operations.getNotifications({ config: { silent: true } });
  });

  if (Students.models.loading || Notifications.models.loading) {
    return <LoadingScreen />;
  }

  return (
    <NotificationsLayout
      clearButton={
        <Button
          text="Clear"
          onPress={Notifications.operations.clearAllNotifications}
          disabled={!Notifications.models.notificationsGroups.length}
        />
      }
      notificationsList={
        <NotificationsList
          notificationsGroups={Notifications.models.notificationsGroups}
          students={Students.models.students}
          onNotificationDelete={Notifications.operations.deleteNotification}
        />
      }
    />
  );
};
