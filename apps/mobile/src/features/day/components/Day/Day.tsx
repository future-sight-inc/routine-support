import React from "react";

import {
  Activity as ActivityType,
  Day as DayType,
  Student,
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

export interface DayActions {
  getDay: () => void;
  confirmActivity: (activity: ActivityType) => void;
  logout: () => void;
}

interface DayProps {
  actions: DayActions;
  loading: boolean;
  day: DayType;
  student: Student;
}

export const Day: React.FC<DayProps> = ({ student, day, loading, actions }) => {
  const {
    operations: { handleLogoutPress },
  } = useDayComponent(actions);
  const { t } = useTranslation();

  return (
    <MainLayout
      title={t<string>("Day schedule")}
      accessoryRight={
        <TopNavigationAction
          icon={(props) => (
            <Icon
              {...props}
              name="log-out-outline"
              onPress={handleLogoutPress}
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
                  clockType={student.clockType}
                  confirmed={isActivityConfirmed({
                    studentId: student._id,
                    activity: item,
                  })}
                  onConfirm={actions.confirmActivity}
                  key={index}
                />
              );
            }

            return (
              <Activity
                activity={item}
                passed={item.end.isBefore(currentTime)}
                clockType={student.clockType}
                key={index}
              />
            );
          }}
        />
      </Layout>
    </MainLayout>
  );
};
