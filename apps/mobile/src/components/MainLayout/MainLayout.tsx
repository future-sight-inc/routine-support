import React, { ReactNode } from "react";

import { Layout, TopNavigation, Divider, Text } from "@ui-kitten/components";
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
  return (
    <Layout
      style={{
        flex: 1,
        alignItems: "center",
        paddingBottom: 8,
        ...StyleSheet.absoluteFillObject,
      }}
    >
      <Layout style={{ width: "100%" }}>
        <TopNavigation
          alignment="center"
          accessoryLeft={accessoryLeft}
          accessoryRight={accessoryRight}
          style={{
            paddingTop: 64,
            paddingBottom: 16,
            backgroundColor: "#275DF0",
          }}
        />
        {title && (
          <Text
            style={{
              position: "absolute",
              top: 66,
              left: 120,
              right: 120,
              textAlign: "center",
              color: "white",
            }}
            category="h6"
          >
            {title}
          </Text>
        )}
        <Divider />
      </Layout>
      {children}
    </Layout>
  );
};
