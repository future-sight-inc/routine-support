import React, { ReactNode } from "react";

import {
  Layout,
  StyleService,
  Text,
  TopNavigation,
  useStyleSheet,
} from "@ui-kitten/components";
import { RenderProp } from "@ui-kitten/components/devsupport";
import { StatusBar } from "expo-status-bar";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface MainLayoutProps {
  accessoryLeft?: RenderProp<unknown>;
  accessoryRight?: RenderProp<unknown>;
  title?: string;
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  accessoryLeft,
  accessoryRight,
  title,
  children,
}) => {
  const styles = useStyleSheet(themedStyles);

  return (
    <SafeAreaView style={styles.wrapper}>
      {/* eslint-disable-next-line */}
      <StatusBar style="light" />
      <Layout style={styles.navigationWrapper}>
        <TopNavigation
          alignment="center"
          accessoryLeft={accessoryLeft}
          accessoryRight={accessoryRight}
          style={styles.navigation}
        />
        {title && (
          <Text style={styles.title} category="h4">
            {title}
          </Text>
        )}
      </Layout>
      {children}
    </SafeAreaView>
  );
};

const themedStyles = StyleService.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 8,
    width: "100%",
    height: Dimensions.get("screen").height,
  },
  navigationWrapper: { width: "100%" },
  navigation: {
    paddingBottom: 8,
  },
  title: {
    position: "absolute",
    top: 12,
    left: 120,
    right: 120,
    textAlign: "center",
  },
});
