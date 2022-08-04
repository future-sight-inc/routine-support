import React, { useEffect } from "react";

import { useHistory } from "react-router-native";

import { AppWrapper } from "../components/AppWrapper";
import { CoachEntry } from "../features/coach";

const App = () => {
  // const {
  //   operations: { getDay },
  // } = useDay();

  // const {
  //   operations: { updateStudentSettings },
  // } = useStudent();

  // // Имеет смысл разделить две версии на разные entries, которые будут подключаться в App
  // useSocketEventListener(WeekSocketEventTypeEnum.UpdateSchedule, () => {
  //   getDay();
  // });

  // useSocketEventListener<Partial<Student>>(WeekSocketEventTypeEnum.UpdateSettings, (settings) => {
  //   updateStudentSettings(settings);
  // });

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
