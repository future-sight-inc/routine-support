/* eslint-disable react/style-prop-object */
import React, { ReactNode } from "react";

import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Theme } from "../../theme";
import { SafeAreaDimensions } from "../../types";
import { useSafeAreaDimensions } from "../../hooks/useSafeAreaDimensions";

export interface LayoutProps {
  children: ReactNode;
  footer?: ReactNode;
  bodyStyle?: StyleProp<ViewStyle>;
  footerStyle?: StyleProp<ViewStyle>;
  scrollable?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  bodyStyle,
  footer,
  footerStyle,
  scrollable = false,
}) => {
  const dimensions = useSafeAreaDimensions();
  const styles = createStyles({ dimensions, hasFooter: Boolean(footer), scrollable });

  return (
    <SafeAreaView style={styles.wrapper} mode="padding">
      <StatusBar style="light-content" />
      <ScrollView scrollEnabled={scrollable} scrollEventThrottle={30}>
        <View style={[styles.body, bodyStyle]}>{children}</View>
      </ScrollView>
      {footer && <View style={[styles.footer, footerStyle]}>{footer}</View>}
    </SafeAreaView>
  );
};

const LAYOUT_PADDING = 16;

const createStyles = ({
  dimensions,
  hasFooter,
}: {
  dimensions: SafeAreaDimensions;
  hasFooter: boolean;
  scrollable: boolean;
}) => {
  return StyleSheet.create({
    wrapper: {
      flexDirection: "column",
      height: "100%",
    },
    body: {
      height: dimensions.height,
      paddingHorizontal: LAYOUT_PADDING,
      paddingBottom: hasFooter ? 82 : 0,
      backgroundColor: Theme.palette.common.white,
      borderColor: Theme.palette.border.light,
      overflow: "hidden",
    },
    footer: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingVertical: LAYOUT_PADDING,
      paddingBottom: dimensions.bottom,
      paddingHorizontal: LAYOUT_PADDING,
      backgroundColor: Theme.palette.common.white,
      position: "absolute",
      bottom: 0,
      width: "100%",
    },
  });
};
