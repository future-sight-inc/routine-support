import React from "react";

import {
  Activity as ActivityType,
  Day as DayType,
} from "@routine-support/domains";
import {
  Divider,
  Icon,
  Layout,
  List,
  Text,
  TopNavigationAction,
} from "@ui-kitten/components";
import moment from "moment";
import { useTranslation } from "react-i18next";

import { MainLayout } from "../../../../components/MainLayout";
import { Activity } from "./components/Activity";
import { CurrentActivity } from "./components/CurrentActivity";
import { useDayComponent } from "./hooks";
import { isActivityConfirmed } from "./utils";

interface DayActions {
  getDay: () => void;
  confirmActivity: (activity: ActivityType) => void;
}

interface DayProps {
  actions: DayActions;
  loading: boolean;
  day: DayType;
  studentId?: string;
}

export const Day: React.FC<DayProps> = ({
  studentId,
  day,
  loading,
  actions,
}) => {
  const {
    operations: { handleForwardPress },
  } = useDayComponent();
  const { t } = useTranslation();

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
          ListEmptyComponent={
            <Text category="s1" style={{ textAlign: "center", marginTop: 16 }}>
              {t<string>("No activities")}
            </Text>
          }
          data={day.activities}
          renderItem={({ item, index }) => {
            const currentTime = moment();

            if (
              item.start.isSameOrBefore(currentTime) &&
              currentTime.isSameOrBefore(item.end)
            ) {
              return (
                <CurrentActivity
                  activity={item}
                  confirmed={isActivityConfirmed({ studentId, activity: item })}
                  onConfirm={actions.confirmActivity}
                  key={index}
                />
              );
            }

            return (
              <Activity
                activity={item}
                passed={item.end.isBefore(currentTime)}
                key={index}
              />
            );
          }}
        />
      </Layout>
    </MainLayout>
  );
};
