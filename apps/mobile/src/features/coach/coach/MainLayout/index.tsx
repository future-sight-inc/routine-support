import React, { ReactNode } from "react";

import { StyleProp, ViewStyle } from "react-native";

import { useCoach } from "../useCoach";
import { useMainLayoutComponent } from "./hooks";
import { MainLayout as UncontrolledMainLayout } from "./MainLayout";

export interface MainLayoutActions {
  logout: () => void;
}

interface MainLayoutProps {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  bodyStyle?: StyleProp<ViewStyle>;
  loading?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  title,
  children,
  footer,
  bodyStyle,
  loading,
}) => {
  const {
    models: { coach },
    operations: { logout },
  } = useCoach();
  const {
    operations: { handleMenuIconPress, handleNotificationsIconPress },
  } = useMainLayoutComponent({ logout }, coach);

  return (
    <UncontrolledMainLayout
      title={title}
      footer={footer}
      bodyStyle={bodyStyle}
      loading={loading || !coach}
      onMenuIconPress={handleMenuIconPress}
      onNotificationsIconPress={handleNotificationsIconPress}
    >
      {children}
    </UncontrolledMainLayout>
  );
};
