import React from "react";

import { Day as DayType } from "@routine-support/models";
import {
  Divider,
  Icon,
  Layout,
  List,
  TopNavigationAction,
} from "@ui-kitten/components";
import moment from "moment";

import { MainLayout } from "../../../../components/MainLayout";
import { Activity } from "./components/Activity";
import { CurrentActivity } from "./components/CurrentActivity";
import { useDayComponent } from "./hooks";

interface DayActions {
  getDay: () => void;
}

interface DayProps {
  actions: DayActions;
  loading: boolean;
  day: DayType;
}

export const Day: React.FC<DayProps> = ({ day, loading, actions }) => {
  const {
    operations: { handleForwardPress },
  } = useDayComponent();

  return (
    <MainLayout
      title="Day"
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
      <Layout style={{ marginBottom: "auto" }}>
        <List
          onRefresh={() => actions.getDay()}
          refreshing={loading}
          style={{
            minWidth: "100%",
          }}
          ItemSeparatorComponent={Divider}
          data={day.activities}
          renderItem={({ item, index }) => {
            const currentTime = moment();

            if (item.end.isBefore(currentTime)) {
              return null;
            }

            if (
              item.start.isSameOrBefore(currentTime) &&
              currentTime.isSameOrBefore(item.end)
            ) {
              return <CurrentActivity activity={item} key={index} />;
            }

            return <Activity activity={item} key={index} />;
          }}
        />
      </Layout>
    </MainLayout>
  );
};
