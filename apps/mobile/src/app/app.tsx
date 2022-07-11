import React, { useEffect } from "react";

import { Student, WeekSocketEventTypeEnum } from "@routine-support/domains";
import { Theme } from "@routine-support/ui-theme";
import { Route } from "react-router-native";
import { NativeRouter } from "react-router-native";
import { useHistory } from "react-router-native";

import { AppWrapper } from "../components/AppWrapper";
import { Login as CoachLogin } from "../features/coach/coach/Login";
import { Register as CoachRegister } from "../features/coach/coach/Register";
import { useDay } from "../features/student/day/useDay";
import { useSocketEventListener } from "../features/student/student/hooks/useSocketEventListener";
import { useStudent } from "../features/student/student/useStudent";
import { mapThemeToMobile } from "../utils/mapThemeToMobile";


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
    history.push('/coach/login');
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

      <Route exact path="/coach/login">
        <CoachLogin />
      </Route>
      <Route exact path="/coach/register">
        <CoachRegister />
      </Route>
    </>
  );
};

export default () => (
  <NativeRouter>
    <AppWrapper>
      <App />
    </AppWrapper>
  </NativeRouter>
);

export const MobileTheme = mapThemeToMobile(Theme);
