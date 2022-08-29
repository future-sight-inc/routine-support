import React, { ReactNode, useState } from "react";

import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { EdgeInsets, SafeAreaView } from "react-native-safe-area-context";

import { MobileTheme } from "../../theme";
import { Typography } from "../Typography";
import { LayoutLocators } from "./locators";

export interface LayoutProps {
  insets: EdgeInsets;
  children: ReactNode;
  title: string;
  footer?: ReactNode;
  leftIcon: ReactNode;
  rightIcon?: ReactNode;
  bodyStyle?: StyleProp<ViewStyle>;
  footerStyle?: StyleProp<ViewStyle>;
  scrollable?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  insets,
  leftIcon,
  rightIcon,
  title,
  children,
  bodyStyle,
  footer,
  footerStyle,
  scrollable = false,
}) => {
  const styles = createStyles({ insets, hasFooter: Boolean(footer), scrollable });
  const [isScrolled, setScrolled] = useState(false);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setScrolled(event.nativeEvent.contentOffset.y > LAYOUT_PADDING);
  };

  return (
    <SafeAreaView style={styles.wrapper} testID={LayoutLocators.Wrapper} mode="padding">
      <StatusBar style="light-content" />
      <View style={[styles.header, isScrolled && { zIndex: 0 }]}>
        {leftIcon}
        <Typography variant="caption3Normal" testID={LayoutLocators.Title}>
          {title}
        </Typography>
        {rightIcon || <View />}
      </View>
      <ScrollView scrollEnabled={scrollable} onScroll={handleScroll} scrollEventThrottle={30}>
        <View style={[styles.body, bodyStyle]} testID={LayoutLocators.Body}>
          {children}
        </View>
      </ScrollView>
      {footer && (
        <View style={[styles.footer, footerStyle]} testID={LayoutLocators.Footer}>
          {footer}
        </View>
      )}
    </SafeAreaView>
  );
};

const LAYOUT_PADDING = 16;
const HEADER_HEIGHT = 78;
const FOOTER_HEIGHT = 80;
const FOOTER_TOP_OFFSET = 8;

const createStyles = ({
  insets,
  hasFooter,
  scrollable,
}: {
  insets: EdgeInsets;
  hasFooter: boolean;
  scrollable: boolean;
}) => {
  const BODY_HEIGHT =
    Dimensions.get("screen").height -
    HEADER_HEIGHT -
    FOOTER_HEIGHT -
    insets.bottom -
    LAYOUT_PADDING -
    FOOTER_TOP_OFFSET;

  return StyleSheet.create({
    wrapper: {
      flexDirection: "column",
      height: "100%",
    },
    header: {
      top: insets.top,
      width: "100%",
      height: HEADER_HEIGHT,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: LAYOUT_PADDING,
      position: "absolute",
      zIndex: 1,
    },
    body: {
      marginTop: HEADER_HEIGHT,
      minHeight: BODY_HEIGHT,
      height: scrollable ? undefined : BODY_HEIGHT,
      paddingHorizontal: LAYOUT_PADDING,
      paddingBottom: hasFooter ? 82 : 0,
      paddingTop: LAYOUT_PADDING,
      borderWidth: 1,
      borderBottomWidth: 0,
      backgroundColor: MobileTheme.palette.common.white,
      borderColor: MobileTheme.palette.border.light,
      borderTopLeftRadius: MobileTheme.borderRadius.xxl,
      borderTopRightRadius: MobileTheme.borderRadius.xxl,
      overflow: "hidden",
      zIndex: 1,
    },
    footer: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingVertical: LAYOUT_PADDING,
      paddingBottom: insets.bottom,
      paddingHorizontal: LAYOUT_PADDING,
      backgroundColor: MobileTheme.palette.common.greyMuted,
      borderWidth: 1,
      borderBottomWidth: 0,
      borderColor: MobileTheme.palette.border.light,
      borderTopLeftRadius: MobileTheme.borderRadius.xl,
      borderTopRightRadius: MobileTheme.borderRadius.xl,
      position: "absolute",
      bottom: 0,
      width: "100%",
    },
  });
};
