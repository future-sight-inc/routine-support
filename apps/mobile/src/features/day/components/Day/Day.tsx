import {
  Button,
  Divider,
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
  Text,
} from "@ui-kitten/components";
import React from "react";
import { StyleSheet, Image } from "react-native";
import { useDayComponent } from "./hooks";

export const Day: React.FC = () => {
  const {
    operations: { handleBackPress, handleForwardPress },
  } = useDayComponent();

  return (
    <Layout
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 64,
        paddingBottom: 8,
        ...StyleSheet.absoluteFillObject,
      }}
    >
      <Layout style={{ width: "100%" }}>
        <TopNavigation
          alignment="center"
          title="9:00"
          accessoryLeft={
            <TopNavigationAction
              icon={(props) => (
                <Icon {...props} name="arrow-back" onPress={handleBackPress} />
              )}
            />
          }
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
      <Layout style={{ marginTop: "auto", marginBottom: "auto" }}>
        <Text category="h4" style={{ textAlign: "center", marginBottom: 16 }}>
          Breakfast
        </Text>
        <Text category="h6" style={{ textAlign: "center", marginBottom: 16 }}>
          9:00 – 9:30
        </Text>
        <Image
          source={{ uri: "https://www.sclera.be/resources/pictos/ontbijt.png" }}
          style={{ width: 320, height: 320 }}
        />
      </Layout>
      <Layout style={{ padding: 16, width: "100%" }}>
        <Button
          style={{ width: "100%" }}
          accessoryLeft={(props) => (
            <Icon {...props} name="checkmark-outline" />
          )}
          size="giant"
        >
          Check
        </Button>
      </Layout>
    </Layout>
  );
};
