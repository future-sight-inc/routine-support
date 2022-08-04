import React, { ReactNode } from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Layout } from "apps/mobile/src/components/Layout";
import { NotificationsIcon } from "apps/mobile/src/components/NotificationsIcon";

import { Navigation } from "./Navigation";

interface MainLayoutProps {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ title, children, footer }) => {
  return (
    <Layout
      title={title}
      footer={footer}
      leftIcon={<Navigation pressElement={<MaterialIcons name="menu" size={30} />} />}
      rightIcon={<NotificationsIcon hasNewNotifications={false} onPress={() => null} />}
    >
      {children}
    </Layout>
  );
};
