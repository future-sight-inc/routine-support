import React, { ReactNode } from "react";

import { Layout } from "apps/mobile/src/components/Layout";

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
      hasNewNotifications={false}
      onNotificationsIconPress={() => null}
      onMenuIconPress={() => null}
    >
      {children}
    </Layout>
  );
};
