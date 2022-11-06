import React, { ReactNode } from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Coach } from "@routine-support/domains";
import { Layout } from "apps/mobile/src/components/Layout";
import { LoadingScreen } from "apps/mobile/src/components/LoadingScreen";
import { NotificationsIcon } from "apps/mobile/src/components/NotificationsIcon";
import { StyleProp, ViewStyle } from "react-native";

import { Navigation } from "./Navigation";

export interface MainLayoutProps {
  title: string;
  coach: Coach;
  children: ReactNode;
  bodyStyle?: StyleProp<ViewStyle>;
  footer?: ReactNode;
  footerStyle?: StyleProp<ViewStyle>;
  loading?: boolean;
  onLogout: () => void;
  onNotificationsIconPress: () => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  coach,
  title,
  children,
  bodyStyle,
  footer,
  footerStyle,
  loading,
  onLogout,
  onNotificationsIconPress,
}) => {
  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Layout
      title={title}
      bodyStyle={bodyStyle}
      footer={footer}
      footerStyle={footerStyle}
      leftIcon={
        <Navigation
          coach={coach}
          pressElement={<MaterialIcons name="menu" size={30} />}
          onLogout={onLogout}
        />
      }
      rightIcon={
        <NotificationsIcon hasNewNotifications={false} onPress={onNotificationsIconPress} />
      }
    >
      {children}
    </Layout>
  );
};
