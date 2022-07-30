import React, { ReactNode } from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Dimensions, StyleSheet, View } from "react-native";
import { EdgeInsets, SafeAreaView } from "react-native-safe-area-context";

import { MobileTheme } from "../../theme";
import { NotificationsIcon } from "../NotificationsIcon";
import { Typography } from "../Typography";
import { LayoutLocators } from "./locators";

export interface LayoutProps {
  insets: EdgeInsets;
  children: ReactNode;
  title: string;
  footer?: ReactNode;
  hasNewNotifications: boolean;
  onNotificationsIconPress: () => void;
  onMenuIconPress: () => void;
}

export const Layout: React.FC<LayoutProps> = ({
  insets,
  title,
  children,
  footer,
  hasNewNotifications,
  onNotificationsIconPress,
  onMenuIconPress,
}) => {
  const styles = createStyles({ insets, hasFooter: Boolean(footer) });

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
      <View style={{ ...styles.body }} testID={LayoutLocators.Body}>
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

const createStyles = ({ insets, hasFooter }: { insets: EdgeInsets; hasFooter: boolean }) => {
  const HEADER_HEIGHT = 78;
  const FOOTER_HEIGHT = 80;
  const HORIZONTAL_PADDING = 16;

  const BODY_HEIGHT =
    Dimensions.get("screen").height -
    HEADER_HEIGHT -
    FOOTER_HEIGHT -
    insets.bottom -
    HORIZONTAL_PADDING -
    8; // todo resolve value

  return StyleSheet.create({
    wrapper: {
      flexDirection: "column",
    },
    header: {
      height: HEADER_HEIGHT,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: HORIZONTAL_PADDING,
    },
    body: {
      height: BODY_HEIGHT,
      paddingHorizontal: HORIZONTAL_PADDING,
      paddingBottom: hasFooter ? 82 : 0,
      paddingTop: HORIZONTAL_PADDING,
      borderWidth: 1,
      borderBottomWidth: 0,
      borderColor: MobileTheme.palette.border.light,
      borderTopLeftRadius: MobileTheme.borderRadius.xxl,
      borderTopRightRadius: MobileTheme.borderRadius.xxl,
      overflow: "hidden",
    },
    footer: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingVertical: HORIZONTAL_PADDING,
      paddingBottom: insets.bottom,
      paddingHorizontal: HORIZONTAL_PADDING,
      backgroundColor: MobileTheme.palette.common.greyMuted,
      borderWidth: 1,
      borderBottomWidth: 0,
      borderColor: MobileTheme.palette.border.light,
      borderTopLeftRadius: MobileTheme.borderRadius.xl,
      borderTopRightRadius: MobileTheme.borderRadius.xl,
    },
  });
};
