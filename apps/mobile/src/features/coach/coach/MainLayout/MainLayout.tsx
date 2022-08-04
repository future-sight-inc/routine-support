import React, { ReactNode } from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Coach } from "@routine-support/domains";
import { Layout } from "apps/mobile/src/components/Layout";
import { NotificationsIcon } from "apps/mobile/src/components/NotificationsIcon";

import { Navigation } from "./Navigation";

export interface MainLayoutProps {
  title: string;
  coach: Coach;
  children: ReactNode;
  footer?: ReactNode;
  onLogout: () => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  coach,
  title,
  children,
  footer,
  onLogout,
}) => {
  return (
    <Layout
      title={title}
      footer={footer}
      leftIcon={
        <Navigation
          coach={coach}
          pressElement={<MaterialIcons name="menu" size={30} />}
          onLogout={onLogout}
        />
      }
      rightIcon={<NotificationsIcon hasNewNotifications={false} onPress={() => null} />}
    >
      {children}
    </Layout>
  );
};
