import React, { useEffect } from "react";

import { Route, useHistory } from "react-router-native";

import { AppWrapper } from "../components/AppWrapper";
import { CoachEntry } from "../features/coach";
import { PrivateRoute } from "../features/student/student/PrivateRoute";
import { LinkService } from "../services/LinkService";

const App = () => {
  const history = useHistory();

  useEffect(() => {
    // history.push(LinkService.coach.login())
    history.push(LinkService.coach.login());
    console.log("fuck");
  }, []);

  return (
    <>
      <Route exact path={LinkService.student.login()}>
        {console.log("login")}
      </Route>
      <PrivateRoute exact path={LinkService.student.day()}>
        {console.log("wtf")}
      </PrivateRoute>
      <CoachEntry />
    </>
  );
};

export default () => (
  <AppWrapper>
    <App />
  </AppWrapper>
);
