import { Day } from "@routine-support/models";
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
import { stringifyTime } from "@routine-support/utils";

interface ScheduleActions {
  getDay: () => void;
}

interface ScheduleProps {
  actions: ScheduleActions;
  loading: boolean;
  day: Day;
}

export const Schedule: React.FC<ScheduleProps> = ({
  day,
  loading,
  actions,
}) => {
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
          onRefresh={() => actions.getDay()}
          refreshing={loading}
          style={{
            minWidth: "100%",
            height: "100%",
          }}
          ItemSeparatorComponent={Divider}
          data={day.activities}
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
                  {stringifyTime(item.start)}-{stringifyTime(item.end)}
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
