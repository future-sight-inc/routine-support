import React from "react";

import { Switch } from 'react-router-native'

import { AppWrapper } from "../components/AppWrapper";
import { CoachEntry } from "../features/coach";
import { StudentEntry } from "../features/student";

const App = () => {
  return (
    <Switch>
      <CoachEntry />
      <StudentEntry />
    </Switch>
  );
};

export default () => (
  <AppWrapper>
    <App />
  </AppWrapper>
);
