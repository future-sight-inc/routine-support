import React from "react";

import { useCoach } from "../useCoach";
import { MainLayoutProps, MainLayout as UncontrolledMainLayout } from "./MainLayout";
import { useMainLayoutComponent } from "./useMainLayoutComponent";

export interface MainLayoutActions {
  logout: () => void;
}

export const MainLayout: React.FC<Omit<MainLayoutProps, "onLogout">> = ({
  title,
  children,
  footer,
}) => {
  const {
    models: { coach },
    operations: { logout },
  } = useCoach();
  const {
    operations: { handleLogout, handleNotificationsIconPress },
  } = useMainLayoutComponent({ logout });

  if (!coach) {
    return null;
  }

  return (
    <UncontrolledMainLayout
      title={title}
      footer={footer}
      coach={coach}
      onLogout={handleLogout}
      onNotificationsIconPress={handleNotificationsIconPress}
    >
      {children}
    </UncontrolledMainLayout>
  );
};
