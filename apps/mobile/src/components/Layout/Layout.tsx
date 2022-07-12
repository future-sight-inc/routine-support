import React, { ReactNode } from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Dimensions, SafeAreaView, StyleSheet, View } from "react-native";

import { MobileTheme } from "../../app/app";
import { NotificationsIcon } from "../NotificationsIcon";
import { Typography } from "../Typography";
import { LayoutLocators } from "./locators";

interface LayoutProps {
  children: ReactNode;
  title: string;
  footer?: ReactNode;
  hasNewNotifications: boolean;
  onNotificationsIconPress: () => void;
  onMenuIconPress: () => void;
}

export const Layout: React.FC<LayoutProps> = ({
  title,
  children,
  footer,
  hasNewNotifications,
  onNotificationsIconPress,
  onMenuIconPress,
}) => {
  return (
    <SafeAreaView style={styles.wrapper} testID={LayoutLocators.Wrapper}>
      <View style={styles.header}>
        <MaterialIcons name="menu" size={30} onPress={onMenuIconPress} />
        <Typography variant="caption3Normal" testID={LayoutLocators.Title}>
          {title}
        </Typography>
        <NotificationsIcon
          hasNewNotifications={hasNewNotifications}
          onPress={onNotificationsIconPress}
        />
      </View>
      <View style={styles.body} testID={LayoutLocators.Body}>
        {children}
      </View>
      {footer && (
        <View style={styles.footer} testID={LayoutLocators.Footer}>
          {footer}
        </View>
      )}
    </SafeAreaView>
  );
};

const HEADER_HEIGHT = 78;
const FOOTER_HEIGHT = 98;

const BODY_HEIGHT = Dimensions.get("window").height - HEADER_HEIGHT - FOOTER_HEIGHT;

const HORIZONTAL_PADDING = 16;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
  },
  header: {
    height: 78,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: HORIZONTAL_PADDING,
  },
  body: {
    height: BODY_HEIGHT,
    paddingHorizontal: HORIZONTAL_PADDING,
    paddingTop: HORIZONTAL_PADDING,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: MobileTheme.palette.border.light,
    borderTopLeftRadius: MobileTheme.borderRadius.xxl,
    borderTopRightRadius: MobileTheme.borderRadius.xxl,
  },
  footer: {
    height: FOOTER_HEIGHT,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: HORIZONTAL_PADDING,
    paddingHorizontal: HORIZONTAL_PADDING,
    backgroundColor: MobileTheme.palette.common.greyMuted,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: MobileTheme.palette.border.light,
    borderTopLeftRadius: MobileTheme.borderRadius.xl,
    borderTopRightRadius: MobileTheme.borderRadius.xl,
  },
});
