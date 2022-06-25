import React from "react";

import { Student, WeekSocketEventTypeEnum } from "@routine-support/domains";
import { Route } from "react-router-native";

import { Day } from "../features/day/components/Day";
import { useDay } from "../features/day/useDay";
import { Login } from "../features/student/components/Login";
import { PrivateRoute } from "../features/student/components/PrivateRoute";
import { useSocketEventListener } from "../features/student/hooks/useSocketEventListener";
import { useStudent } from "../features/student/useStudent";

export const App = () => {
  const {
    operations: { getDay },
  } = useDay();

  const {
    operations: { updateStudentSettings },
  } = useStudent();

  useSocketEventListener(WeekSocketEventTypeEnum.UpdateSchedule, () => {
    getDay();
  });

  useSocketEventListener<Partial<Student>>(
    WeekSocketEventTypeEnum.UpdateSettings,
    (settings) => {
      updateStudentSettings(settings);
    }
  );

  return (
    <>
      <Route exact path="/login">
        <Login />
      </Route>
      <PrivateRoute>
        <Route exact path="/">
          <Day />
        </Route>
      </PrivateRoute>
    </>
  );
};

export default App;
