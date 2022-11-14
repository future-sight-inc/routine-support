import React, { useEffect } from "react";

import { useHistory } from "react-router-native";

import { AppWrapper } from "../components/AppWrapper";
import { CoachEntry } from "../features/coach";

const App = () => {
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
