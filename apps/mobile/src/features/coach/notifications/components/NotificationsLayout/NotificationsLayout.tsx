import React, { ReactNode } from "react";

import { StyleSheet } from 'react-native'

import { MainLayout } from "../../../coach/MainLayout";

interface NotificationsLayoutProps {
  notificationsList: ReactNode;
  clearButton: ReactNode;
  loading: boolean;
}

export const NotificationsLayout: React.FC<NotificationsLayoutProps> = ({
  notificationsList,
  clearButton,
}) => {
  return (
    <MainLayout title="Notifications" footer={clearButton} bodyStyle={styles.body}>
      {notificationsList}
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 0,
    paddingTop: 0,
  },
});
