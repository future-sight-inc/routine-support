import React, { ReactNode } from "react";

import {
  Divider,
  Layout,
  StyleService,
  Text,
  TopNavigation,
  useStyleSheet,
} from "@ui-kitten/components";
import { RenderProp } from "@ui-kitten/components/devsupport";
import { StyleSheet } from "react-native";

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
    <Layout style={styles.wrapper}>
      <Layout style={styles.navigationWrapper}>
        <TopNavigation
          alignment="center"
          accessoryLeft={accessoryLeft}
          accessoryRight={accessoryRight}
          style={styles.navigation}
        />
        {title && (
          <Text style={styles.title} category="h6">
            {title}
          </Text>
        )}
        <Divider />
      </Layout>
      {children}
    </Layout>
  );
};

const themedStyles = StyleService.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 8,
    ...StyleSheet.absoluteFillObject,
  },
  navigationWrapper: { width: "100%" },
  navigation: {
    paddingTop: 64,
    paddingBottom: 16,
    backgroundColor: "color-primary-500",
  },
  title: {
    position: "absolute",
    top: 66,
    left: 120,
    right: 120,
    textAlign: "center",
    color: "white",
  },
});
