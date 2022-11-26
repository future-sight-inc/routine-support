import React from "react";

import { Button } from "apps/mobile/src/components/Button";

import { useStudents } from "../students/useStudents";
import { NotificationsLayout } from "./components/NotificationsLayout";
import { NotificationsList } from "./components/NotificationsList";
import { useNotifications } from "./useNotifications";

export const Notifications: React.FC = () => {
  const Notifications = useNotifications();
  const Students = useStudents();

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
          loading={Students.models.loading || Notifications.models.loading}
          notificationsGroups={Notifications.models.notificationsGroups}
          students={Students.models.students}
          onNotificationDelete={Notifications.operations.deleteNotification}
        />
      }
    />
  );
};
