import React from "react";

import { Activity as ActivityType, Day as DayType, Student } from "@routine-support/domains";
import { Icon, Layout, List, Text, TopNavigationAction } from "@ui-kitten/components";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { Image, StyleSheet } from "react-native";

import smile from "../../../../../assets/smile.png";
import { MainLayout } from "../../../../../components/MainLayout";
import { PinCodeInput } from "../../../../../components/PinCodeInput";
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
    models: { isPinCodeInputVisible },
    operations: { handleLogoutPress, handlePinCodeSuccessInput, handlePinCodeInputClose },
  } = useDayComponent(actions);
  const { t } = useTranslation();

  return (
    <>
      <MainLayout
        title={t<string>("Today")}
        accessoryRight={
          <TopNavigationAction
            icon={(props) => (
              <Icon
                {...props}
                name="log-out-outline"
                onLongPress={handleLogoutPress}
                fill="black"
                style={styles.navigationIcon}
              />
            )}
          />
        }
      >
        <List
          onRefresh={() => actions.getDay()}
          refreshing={loading}
          style={styles.list}
          ListEmptyComponent={
            <Layout style={styles.emptyWrapper}>
              <Text category="h5" style={styles.emptyText}>
                {t<string>("No activities")}
              </Text>
              <Image source={smile} style={styles.emptyIcon} />
            </Layout>
          }
          data={day.activities.filter((activity) => activity.end.isSameOrAfter(moment()))}
          renderItem={({ item, index }) => {
            const currentTime = moment();

            if (item.start.isSameOrBefore(currentTime) && currentTime.isSameOrBefore(item.end)) {
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
                isPassed={item.end.isBefore(currentTime)}
                clockType={student.clockType}
                key={index}
              />
            );
          }}
        />
      </MainLayout>
      {isPinCodeInputVisible && (
        <PinCodeInput
          pinCode={student.pinCode}
          onSuccessInput={handlePinCodeSuccessInput}
          onClose={handlePinCodeInputClose}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  navigationIcon: {
    width: 32,
    height: 32,
  },
  emptyWrapper: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 32,
  },
  emptyIcon: {
    width: 96,
    height: 96,
    marginTop: 8,
  },
  list: {
    width: "100%",
    backgroundColor: "white",
  },
});
