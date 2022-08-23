import React, { ReactNode } from "react";

import { useCoach } from "../useCoach";
import { MainLayout as UncontrolledMainLayout } from "./MainLayout";
import { useMainLayoutComponent } from "./useMainLayoutComponent";

export interface MainLayoutActions {
  logout: () => void;
}

interface MainLayoutProps {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ title, children, footer }) => {
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
