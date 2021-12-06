import {
  Button,
  Divider,
  Icon,
  Layout,
  List,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import React from "react";
import { Image, StyleSheet } from "react-native";
import { useScheduleComponent } from "./hooks";

const data = [
  {
    id: "1",
    name: "Breakfast",
    pictogram: "https://www.sclera.be/resources/pictos/ontbijt.png",
    time: "9:00 - 9:30",
  },
  {
    id: "1",
    name: "Morning walk",
    pictogram: "https://www.sclera.be/resources/pictos/wandelen%202.png",
    time: "10:00 - 11:00",
  },
  {
    id: "1",
    name: "Painting",
    pictogram: "https://www.sclera.be/resources/pictos/waterverf.png",
    time: "11:00 – 12:00",
  },
];

export const Schedule: React.FC = () => {
  const {
    operations: { handleActivityOpen, handleForwardPress },
  } = useScheduleComponent();

  return (
    <Layout
      style={{
        // todo Создать компоненту обертки страницы
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 64,
        ...StyleSheet.absoluteFillObject,
      }}
    >
      <Layout style={{ width: "100%" }}>
        <TopNavigation
          alignment="center"
          title="9:00"
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
      <Layout style={{ marginTop: 16, marginBottom: "auto" }}>
        <List
          style={{
            minWidth: "100%",
            height: "100%",
          }}
          ItemSeparatorComponent={Divider}
          data={data}
          renderItem={({ item, index }) => (
            <Layout
              style={{
                padding: 16,
                flex: 1,
                flexDirection: "row",
              }}
              key={index}
            >
              <Image
                source={{
                  uri: item.pictogram,
                }}
                style={{ width: 120, height: 120 }}
              />
              <Layout style={{ marginLeft: 16 }}>
                <Text category="h6" style={{ marginBottom: 8 }}>
                  {item.name}
                </Text>
                <Text category="s1" appearance="hint">
                  {item.time}
                </Text>
                <Button
                  style={{ marginTop: "auto", width: 120 }}
                  onPress={handleActivityOpen}
                >
                  Open
                </Button>
              </Layout>
            </Layout>
          )}
        />
      </Layout>
    </Layout>
  );
};
