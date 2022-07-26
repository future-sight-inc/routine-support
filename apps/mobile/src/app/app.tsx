import React, { useEffect } from "react";

import { Student, WeekSocketEventTypeEnum } from "@routine-support/domains";
import { useHistory } from "react-router-native";

import { AppWrapper } from "../components/AppWrapper";
import { CoachEntry } from "../features/coach";
import { useDay } from "../features/student/day/useDay";
import { useSocketEventListener } from "../features/student/student/hooks/useSocketEventListener";
import { useStudent } from "../features/student/student/useStudent";

const App = () => {
  const {
    operations: { getDay },
  } = useDay();

  const {
    operations: { updateStudentSettings },
  } = useStudent();

  // Имеет смысл разделить две версии на разные entries, которые будут подключаться в App
  useSocketEventListener(WeekSocketEventTypeEnum.UpdateSchedule, () => {
    getDay();
  });

  useSocketEventListener<Partial<Student>>(WeekSocketEventTypeEnum.UpdateSettings, (settings) => {
    updateStudentSettings(settings);
  });

  const history = useHistory();

  useEffect(() => {
    history.push("/coach/login");
  }, []);

  return (
    <>
      {/* <Route exact path="/student/login">
        <StudentLogin />
      </Route>
      <PrivateRoute>
        <Route exact path="/student/">
          <Day />
        </Route>
      </PrivateRoute> */}

      <CoachEntry />
    </>
  );
};

export default () => (
  <AppWrapper>
    <App />
  </AppWrapper>
);
