import React, { useEffect } from "react";

import { useHistory } from "react-router-native";

import { AppWrapper } from "../components/AppWrapper";
import { CoachEntry } from "../features/coach";
import { StudentEntry } from "../features/student";

const App = () => {
  const history = useHistory();

  useEffect(() => {
    history.push("/coach/login");
  }, []);

  return (
    <>
      <CoachEntry />
      <StudentEntry />
    </>
  );
};

export default () => (
  <AppWrapper>
    <App />
  </AppWrapper>
);
