import React from "react";

import { Day } from "@routine-support/models";
import { stringifyTime } from "@routine-support/utils";
import {
  Divider,
  Icon,
  Layout,
  List,
  Text,
  TopNavigationAction,
} from "@ui-kitten/components";
import { Image } from "react-native";

import { MainLayout } from "../../../../components/MainLayout";
import { useScheduleComponent } from "./hooks";

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
    <MainLayout
      title="Schedule"
      accessoryRight={
        <TopNavigationAction
          icon={(props) => (
            <Icon
              {...props}
              name="person-outline"
              onPress={handleForwardPress}
              fill="white"
            />
          )}
        />
      }
    >
      <Layout style={{ marginTop: 16, marginBottom: "auto" }}>
        <List
          onRefresh={() => actions.getDay()}
          refreshing={loading}
          style={{
            minWidth: "100%",
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
              </Layout>
            </Layout>
          )}
        />
      </Layout>
    </MainLayout>
  );
};
