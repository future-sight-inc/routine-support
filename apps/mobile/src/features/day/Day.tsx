import {
  Divider,
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { useDayComponent } from "./hooks";

export const Day: React.FC = () => {
  const {
    operations: { handleForwardPress },
  } = useDayComponent();

  return (
    <Layout
      style={{
        flex: 1,
        alignItems: "center",
        padding: 32,
        paddingTop: 64,
        ...StyleSheet.absoluteFillObject,
      }}
    >
      <Layout style={{ width: "100%" }}>
        <TopNavigation
          alignment="center"
          title="10:00"
          accessoryRight={
            <TopNavigationAction
              icon={(props) => (
                <Icon
                  {...props}
                  name="person-outline"
                  onPress={handleForwardPress}
                />
              )}
            />
          }
        />
        <Divider />
      </Layout>
    </Layout>
  );
};
