import React, { ReactNode } from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { Layout } from "apps/mobile/src/components/Layout";
import { LoadingScreen } from "apps/mobile/src/components/LoadingScreen";
import { NotificationsIcon } from "apps/mobile/src/components/NotificationsIcon";
import { Typography } from "apps/mobile/src/components/Typography";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";

interface MainLayoutProps {
  title: string;
  children: ReactNode;
  bodyStyle?: StyleProp<ViewStyle>;
  footer?: ReactNode;
  footerStyle?: StyleProp<ViewStyle>;
  loading?: boolean;
  onMenuIconPress: () => void;
  onNotificationsIconPress: () => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  title,
  children,
  bodyStyle,
  footer,
  footerStyle,
  loading,
  onMenuIconPress,
  onNotificationsIconPress,
}) => {
  const navigation = useNavigation();

  navigation.setOptions({
    headerStyle: {
      height: 78,
    },
    headerLeftContainerStyle: {
      paddingLeft: 16,
    },
    headerRightContainerStyle: { paddingRight: 16 },
    headerShadowVisible: false,
    headerTitle: () => <Typography variant="caption3Normal">{title}</Typography>,
    headerLeft: () => (
      <TouchableOpacity onPress={onMenuIconPress}>
        <MaterialIcons name="menu" size={30} />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <NotificationsIcon hasNewNotifications={false} onPress={onNotificationsIconPress} />
    ),
  });

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Layout bodyStyle={bodyStyle} footer={footer} footerStyle={footerStyle}>
      {children}
    </Layout>
  );
};
