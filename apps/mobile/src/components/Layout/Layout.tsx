import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { MobileTheme } from "../../app/app";

export const Layout: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
      <View style={styles.body}>
        <Text>Body</Text>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </View>
  );
};

const HEADER_HEIGHT = 78;
const FOOTER_HEIGHT = 98;
const BOTTOM_SAFE_AREA_PADDING = 45;
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
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: HORIZONTAL_PADDING,
  },
  body: {
    height: BODY_HEIGHT,
    paddingHorizontal: HORIZONTAL_PADDING,
    paddingTop: HORIZONTAL_PADDING,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: MobileTheme.palette.border.normal,
    borderTopLeftRadius: MobileTheme.borderRadius.xxl,
    borderTopRightRadius: MobileTheme.borderRadius.xxl,
  },
  footer: {
    height: FOOTER_HEIGHT,
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: HORIZONTAL_PADDING,
    backgroundColor: MobileTheme.palette.common.greyMuted,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: MobileTheme.palette.border.normal,
    borderTopLeftRadius: MobileTheme.borderRadius.xl,
    borderTopRightRadius: MobileTheme.borderRadius.xl,
  },
});
