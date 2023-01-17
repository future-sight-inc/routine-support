import React from "react";

import { isToday } from "@routine-support/utils";
import { Button } from "apps/mobile/src/components/Button";
import { Calendar } from "apps/mobile/src/components/Calendar";
import { DaySelect } from "apps/mobile/src/components/DaySelect";
import { LoadingScreen } from "apps/mobile/src/components/LoadingScreen";
import { Dimensions, View } from "react-native";

import { useStudents } from "../../coach/students/useStudents";
import { MainLayout } from "../student/MainLayout";
import { useStudent } from "../student/useStudent";
import { Activity as ActivityComponent } from "./components/Activity";
import { useDay } from "./useDay";

export const Day: React.FC = () => {
  const Day = useDay();
  const Students = useStudents();

  const {
    models: { student },
    // operations: { logout },
  } = useStudent();

  if (!Day.models.day || !student) {
    return <LoadingScreen />;
  }

  return (
    <MainLayout
      title="Calendar"
      footer={<Button text="Activity" icon="add" onPress={() => null} />}
    >
      <View style={{ width: Dimensions.get("screen").width }}>
        <DaySelect date={Day.models.currentDate} onSelect={Day.operations.onDateSelect} />
        <Calendar
          loading={Students.models.loading || Day.models.loading}
          isToday={isToday(Day.models.currentDate)}
          activities={Day.models.day?.activities}
          students={Students.models.students}
          timeRange={Day.models.day?.timeRange}
          onActivityPress={() => null}
          onCellPress={() => null}
          ActivityComponent={ActivityComponent}
        />
      </View>
    </MainLayout>
  );
};
