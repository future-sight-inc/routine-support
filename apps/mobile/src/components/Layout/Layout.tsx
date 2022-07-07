import React, { ReactNode } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { MobileTheme } from "../../app/app";
import { Typography } from "../Typography";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LayoutLocators } from "./locators";

interface LayoutProps {
  children: ReactNode;
  title: string;
  footer?: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ title, children, footer }) => {
  return (
    <View style={styles.wrapper} testID={LayoutLocators.Wrapper}>
      <View style={styles.header}>
        <MaterialIcons name="menu" size={30} />
        <Typography variant="caption3Normal" testID={LayoutLocators.Title}>
          {title}
        </Typography>
        <MaterialIcons name="notifications" size={30} />
      </View>
      <View style={styles.body} testID={LayoutLocators.Body}>
        {children}
      </View>
      {footer && (
        <View style={styles.footer} testID={LayoutLocators.Footer}>
          {footer}
        </View>
      )}
    </View>
  );
};

const HEADER_HEIGHT = 78;
const FOOTER_HEIGHT = 98;
const BOTTOM_SAFE_AREA_PADDING = 48;
const TOP_SAFE_AREA_PADDING = 0;
const BODY_HEIGHT =
  Dimensions.get("window").height -
  TOP_SAFE_AREA_PADDING -
  HEADER_HEIGHT -
  FOOTER_HEIGHT -
  BOTTOM_SAFE_AREA_PADDING;
const HORIZONTAL_PADDING = 16;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    paddingTop: TOP_SAFE_AREA_PADDING,
    paddingBottom: BOTTOM_SAFE_AREA_PADDING,
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
